import * as cdk from 'aws-cdk-lib';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as s3 from 'aws-cdk-lib/aws-s3';
import type { Construct } from 'constructs';
import type { StorageStack } from './storage-stack';

interface DeploymentStackProps extends cdk.StackProps {
  storageStack: StorageStack;
}

export class DeploymentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DeploymentStackProps) {
    super(scope, id, props);

    // Get the bucket from the storage stack
    const bucket = props.storageStack.bucket;

    // Deploy static assets with long cache time
    new s3deploy.BucketDeployment(this, 'StaticAssetsDeployment', {
      sources: [s3deploy.Source.asset('../../dist')],
      destinationBucket: bucket,
      cacheControl: [s3deploy.CacheControl.maxAge(cdk.Duration.days(365)), s3deploy.CacheControl.immutable()],
      // Only deploy files that match these patterns
      include: [
        '*.js',
        '*.css',
        '*.png',
        '*.jpg',
        '*.jpeg',
        '*.gif',
        '*.svg',
        '*.ico',
        '*.woff',
        '*.woff2',
        '*.ttf',
        '*.eot',
      ],
    });

    // Deploy HTML files with no caching
    new s3deploy.BucketDeployment(this, 'HtmlDeployment', {
      sources: [s3deploy.Source.asset('../../dist')],
      destinationBucket: bucket,
      cacheControl: [s3deploy.CacheControl.noCache(), s3deploy.CacheControl.mustRevalidate()],
      // Only deploy HTML files
      include: ['*.html'],
    });
  }
}
