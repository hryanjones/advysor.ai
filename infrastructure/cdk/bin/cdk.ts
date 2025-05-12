#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StorageStack } from '../lib/storage-stack';
import { CDNStack } from '../lib/cdn-stack';
import { DNSStack } from '../lib/dns-stack';
import { DeploymentStack } from '../lib/deployment-stack';

const app = new cdk.App();

// Get domain name from context
const domainName = app.node.tryGetContext('domain') || '';

console.log('Domain name from context:', domainName);
console.log('CDK_DEFAULT_ACCOUNT:', process.env.CDK_DEFAULT_ACCOUNT);
console.log('CDK_DEFAULT_REGION:', process.env.CDK_DEFAULT_REGION);

if (!domainName) {
  throw new Error('domain must be provided as context');
}

// const account = process.env.CDK_DEFAULT_ACCOUNT;
// const region = process.env.CDK_DEFAULT_REGION;

const account = '756021455880';
const region = 'us-east-1';

if (!account || !region) {
  throw new Error('CDK_DEFAULT_ACCOUNT and CDK_DEFAULT_REGION must be set');
}

// Create the storage stack
const storageStack = new StorageStack(app, 'AdvysorStorageStack', {
  env: {
    account,
    region,
  },
  domainName,
});

// Create the CDN stack
const cdnStack = new CDNStack(app, 'AdvysorCDNStack', {
  env: {
    account,
    region,
  },
  domainName,
  storageStack,
});

// Create the DNS stack
const dnsStack = new DNSStack(app, 'AdvysorDNSStack', {
  env: {
    account,
    region,
  },
  domainName,
  cdnStack,
});

// Create the deployment stack
const deploymentStack = new DeploymentStack(app, 'AdvysorDeploymentStack', {
  env: {
    account,
    region,
  },
  storageStack,
});

// Set explicit dependencies
cdnStack.addDependency(storageStack);
dnsStack.addDependency(cdnStack);
deploymentStack.addDependency(storageStack);
