import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import type { Construct } from 'constructs';
import type { CDNStack } from './cdn-stack';

interface DNSStackProps extends cdk.StackProps {
  domainName: string;
  cdnStack: CDNStack;
}

export class DNSStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DNSStackProps) {
    super(scope, id, props);

    // Split domain into parts
    let parentDomain = props.domainName;
    const subdomain = props.domainName;
    const domainParts = props.domainName.split('.');
    if (domainParts.length > 2) {
      parentDomain = domainParts.slice(-2).join('.');
    }

    // Debugging outputs
    console.log('Account:', props.env?.account);
    console.log('Region:', props.env?.region);
    console.log('Parent Domain:', parentDomain);
    console.log('Sub Domain:', subdomain);

    const parentZone = route53.HostedZone.fromLookup(this, 'ParentZone', {
      domainName: parentDomain,
    });

    // Create A record in the parent zone pointing to CloudFront
    new route53.ARecord(this, 'AliasRecord', {
      zone: parentZone,
      recordName: subdomain,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(props.cdnStack.distribution)),
    });

    // Output the parent zone ID
    new cdk.CfnOutput(this, 'ParentZoneId', {
      value: parentZone.hostedZoneId,
      description: 'The ID of the parent Route 53 hosted zone',
    });
  }
}
