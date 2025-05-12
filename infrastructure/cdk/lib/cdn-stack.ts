import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { S3StaticWebsiteOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import type { Construct } from 'constructs';
import type { StorageStack } from './storage-stack';

interface CDNStackProps extends cdk.StackProps {
  domainName: string;
  storageStack: StorageStack;
}

export class CDNStack extends cdk.Stack {
  public readonly distribution: cloudfront.Distribution;

  constructor(scope: Construct, id: string, props: CDNStackProps) {
    super(scope, id, props);

    // Create SSL certificate
    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: props.domainName,
      validation: acm.CertificateValidation.fromDns(),
    });

    // Create CloudFront distribution
    this.distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new S3StaticWebsiteOrigin(props.storageStack.bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          {
            function: new cloudfront.Function(this, 'DefaultFunction', {
              code: cloudfront.FunctionCode.fromInline(`
              function handler(event) {
                var request = event.request;
                var uri = request.uri;

                // Check whether the URI is missing a file extension
                if (!uri.includes('.')) {
                  request.uri = '/index.html';
                }

                return request;
              }
            `),
            }),
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      defaultRootObject: 'index.html',
      additionalBehaviors: {
        // Don't cache HTML files
        '*.html': {
          origin: new S3StaticWebsiteOrigin(props.storageStack.bucket),
          viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
        },
      },
      certificate,
      domainNames: [props.domainName],
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    // Output the distribution ID and domain name
    new cdk.CfnOutput(this, 'DistributionId', {
      value: this.distribution.distributionId,
      description: 'The ID of the CloudFront distribution',
    });

    new cdk.CfnOutput(this, 'DistributionDomain', {
      value: this.distribution.distributionDomainName,
      description: 'The domain name of the CloudFront distribution',
    });
  }
}
