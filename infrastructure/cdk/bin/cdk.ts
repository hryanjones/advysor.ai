#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { StorageStack } from '../lib/storage-stack';
import { CDNStack } from '../lib/cdn-stack';
import { DNSStack } from '../lib/dns-stack';

const app = new cdk.App();

// Get domain name from context, defaulting to advysor.ai
const domainName = app.node.tryGetContext('domain') || 'advysor.ai';

const account = process.env.CDK_DEFAULT_ACCOUNT;
const region = process.env.CDK_DEFAULT_REGION;

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
new DNSStack(app, 'AdvysorDNSStack', {
  env: {
    account,
    region,
  },
  domainName,
  cdnStack,
});
