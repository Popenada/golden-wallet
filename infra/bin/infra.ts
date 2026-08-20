#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { GoldenWalletStack } from "../lib/golden-wallet-stack";

const app = new cdk.App();

new GoldenWalletStack(app, "GoldenWalletStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
