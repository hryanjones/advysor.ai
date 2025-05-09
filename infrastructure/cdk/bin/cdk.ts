#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StorageStack } from '../lib/storage-stack';
import { CDNStack } from '../lib/cdn-stack';

const app = new cdk.App();

// Get domain name from context, defaulting to advysor.ai
const domainName = app.node.tryGetContext('domain') || 'advysor.ai';

// Create the storage stack
const storageStack = new StorageStack(app, 'AdvysorStorageStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  domainName,
});

// Create the CDN stack
new CDNStack(app, 'AdvysorCDNStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  domainName,
  storageStack,
});
