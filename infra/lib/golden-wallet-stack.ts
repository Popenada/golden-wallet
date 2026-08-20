import * as path from "path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecsPatterns from "aws-cdk-lib/aws-ecs-patterns";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";

// Must already exist: create it once with
//   aws secretsmanager create-secret --name golden-wallet/openai-api-key \
//     --secret-string '{"OPENAI_API_KEY":"sk-..."}'
const OPENAI_SECRET_NAME = "golden-wallet/openai-api-key";

export class GoldenWalletStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // No NAT gateway: Fargate tasks run in public subnets, still locked down
    // by the service's security group (only reachable from the ALB).
    const vpc = new ec2.Vpc(this, "GoldenWalletVpc", {
      maxAzs: 2,
      natGateways: 0,
      subnetConfiguration: [
        { name: "public", subnetType: ec2.SubnetType.PUBLIC, cidrMask: 24 },
      ],
    });

    const cluster = new ecs.Cluster(this, "GoldenWalletCluster", { vpc });

    const openAiSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      "OpenAiSecret",
      OPENAI_SECRET_NAME
    );

    const service = new ecsPatterns.ApplicationLoadBalancedFargateService(
      this,
      "GoldenWalletService",
      {
        cluster,
        cpu: 256,
        memoryLimitMiB: 512,
        desiredCount: 1,
        publicLoadBalancer: true,
        assignPublicIp: true,
        taskSubnets: { subnetType: ec2.SubnetType.PUBLIC },
        circuitBreaker: { rollback: true },
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset(path.join(__dirname, "../..")),
          containerPort: 3000,
          environment: {
            PORT: "3000",
            NODE_ENV: "production",
          },
          secrets: {
            OPENAI_API_KEY: ecs.Secret.fromSecretsManager(
              openAiSecret,
              "OPENAI_API_KEY"
            ),
          },
        },
      }
    );

    service.targetGroup.configureHealthCheck({ path: "/" });

    new cdk.CfnOutput(this, "ServiceUrl", {
      value: `http://${service.loadBalancer.loadBalancerDnsName}`,
    });
  }
}
