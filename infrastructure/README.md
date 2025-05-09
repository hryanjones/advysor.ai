# Advysor.ai Infrastructure

This directory contains AWS CDK code for deploying the Advysor.ai static website to AWS.

## Setting up deployment

(all commands need to be run from the `infrastructure/cdk` folder)

### Bootstrap (once per account)

Following must be run with an **Admin** user that has the ability to create IAM resources.

`npx cdk bootstrap -c domain=advysor.hryanjones.com --profile TempAdmin`

### Deploy

This can be a PowerUser (or just have access to services needed)

`npx cdk deploy -c domain=advysor.hryanjones.com --profile AdvysorTestingPowerUser -all`

(can also drop the `--all` to specify a single stack -> perhaps a fast way to just deploy after all the resources are set up?)

----

## Architecture Overview

The infrastructure is split into multiple stacks to allow for incremental deployment and testing:

### 1. Storage Stack (`StorageStack`)
- S3 bucket for static website hosting
- Bucket name matches domain name (e.g., `advysor.ai`)
- Bucket policy for public read access
- CORS configuration
- Outputs bucket name and ARN

### 2. CDN Stack (`CDNStack`)
- CloudFront distribution
- Origin Access Control (OAC) for S3 access
- Custom error responses
- Cache behaviors:
  - HTML files: No caching
  - Hashed static assets: Cache forever
- SSL certificate (via ACM)
- Always redirect HTTP to HTTPS
- Outputs distribution ID and domain name

### 3. DNS Stack (`DNSStack`)
- Route 53 hosted zone
- A record alias pointing to CloudFront
- Outputs hosted zone ID

### 4. Deployment Stack (`DeploymentStack`)
- Uses CDK's `BucketDeployment` construct for two-phase deployment:
  1. Upload new assets (hashed files)
  2. Upload HTML files (overwrite)
- Sets appropriate cache control headers on S3 objects
- Depends on `StorageStack` for S3 bucket access

TODO: Future enhancements (commented out in code):
- CodeBuild integration for automated deployments
- GitHub Actions integration
- Monitoring stack with CloudWatch metrics and alarms

## Deployment Strategy

### Phase 1: Basic S3 Setup
1. Deploy `StorageStack`
2. Test manual file upload
3. Verify bucket configuration

### Phase 2: CDN Integration
1. Deploy `CDNStack`
2. Configure S3 bucket policy for CloudFront
3. Test content delivery
4. Verify SSL/TLS

### Phase 3: DNS Configuration
1. Deploy `DNSStack`
2. Configure domain settings
3. Test domain resolution
4. Verify SSL certificate

### Phase 4: Automated Deployment
1. Deploy `DeploymentStack`
2. Test deployment process
3. Verify cache behaviors

## Alternative Approaches

### Option A: AWS Amplify
- Pros:
  - Simpler setup
  - Built-in CI/CD
  - Automatic SSL
  - Branch-based deployments
- Cons:
  - Less control over infrastructure
  - Potentially higher costs
  - Limited customization

### Option B: S3 + CloudFront + Route 53 (Current Plan)
- Pros:
  - Full control over infrastructure
  - Cost-effective
  - Highly customizable
  - Better for static sites
  - SSL/TLS managed by ACM
- Cons:
  - More complex setup
  - Requires more maintenance

## Implementation Notes

1. **Stack Dependencies**
   - `CDNStack` depends on `StorageStack`
   - `DNSStack` depends on `CDNStack`
   - `DeploymentStack` depends on `StorageStack`

2. **Security Considerations**
   - S3 bucket should be private
   - CloudFront OAC for secure access
   - SSL/TLS via ACM
   - Deployment can run under existing Power User role (no IAM creation needed)

3. **Cost Optimization**
   - CloudFront caching
   - Route 53 health checks

4. **Monitoring (TODO)**
   - CloudWatch metrics
   - S3 access logs
   - CloudFront logs
   - Route 53 health checks

## Next Steps

1. Initialize CDK project
2. Implement `StorageStack`
3. Test S3 deployment
4. Proceed with subsequent phases