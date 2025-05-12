import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import type { Construct } from 'constructs';

interface StorageStackProps extends cdk.StackProps {
  domainName: string;
}

export class StorageStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: StorageStackProps) {
    super(scope, id, props);

    // Create the S3 bucket
    this.bucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: props.domainName,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      removalPolicy: cdk.RemovalPolicy.RETAIN, // Prevent accidental deletion
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.HEAD],
          allowedOrigins: ['*'], // This will be restricted by CloudFront later
          allowedHeaders: ['*'],
          maxAge: 3000,
        },
      ],
    });

    // Add bucket policy to allow public read access
    this.bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [this.bucket.arnForObjects('*')],
        principals: [new iam.AnyPrincipal()],
      }),
    );

    // Output the bucket name and ARN
    new cdk.CfnOutput(this, 'BucketName', {
      value: this.bucket.bucketName,
      description: 'The name of the S3 bucket',
    });

    new cdk.CfnOutput(this, 'BucketArn', {
      value: this.bucket.bucketArn,
      description: 'The ARN of the S3 bucket',
    });
  }
}
