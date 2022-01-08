## AWS Amazon architecture
This directory stores the YAML files with the `Infrastructure as code` directives written in a lanugage understood by [AWS Cloudformation](https://aws.amazon.com/cloudformation/).

We tried adopting the mindset of `Infrastructure as code` and describe our production AWS infrastructure as code. This way, the WoF production environment is as much replicable as possible with minimal effort. The elements of the architecture that can be found in the YAMLs are:
* a Virtual Private Network and the entirety of the networking setup between resources in the network
* an Amazon RDS instance
* two AWS Lambda functions and a DynamoDB table
* an EC2 instance.

If you are interested in replicating the WoF application application, take a look at the [Contribution guide](https://github.com/kpagacz/wiki-on-fire/wiki/Contribution-guide). This repository contains _production_ environment of Wiki On Fire and is useless in case of replicating the environment locally.

## Creating a Cloudformation YAML
We exclusively followed the official Cloudformation documentation and examples to write the YAML files. The usual process of creating a fully working Cloudformation YAML included creating the resources step by step and testing them against the AWS service at each step.

Testing a resource included creating or updating an existing [Cloudformation stack](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) and seeing if Cloudformation successfully created a resource. If it didn't - we came back to fix the file, if it did - we moved onto creating another resource.

### How to upload a YAML to Cloudformation
1. Prepare the YAML
2. Navigate to the AWS console and Cloudformation service
3. Click Create Stack and choose With new resources (standard)

![](https://user-images.githubusercontent.com/24480246/148624091-0e86ed1f-978e-40ae-a218-bd293e3aebc1.png)

4. Choose Template is ready and Upload a template file

![](https://user-images.githubusercontent.com/24480246/148624269-201db6f6-23c1-4716-8022-1988419d2286.png)

5. Upload the prepared template.
6. Wait for Cloudformation to create the resources.
7. Look at the Events and Resources tab to read any errors or messages about success.

### How to update an existing stack
1. Open an existing stack
2. Choose Update and followe the steps similar to uploading a YAML.

![](https://user-images.githubusercontent.com/24480246/148624224-5d23c591-6513-4043-a8ee-40970171da03.png)

## Github Workflows when needed
For simplicity sake, we didn't do everything with YAML files. Some of the work is actually done by our Github Workflows. That includes:
* seeding the DynamoDb table with the Wikipedia data from the last 100 days
* updating the documentation hosted on an AWS S3 Bucket
* updating the Lambda functions with appropriate runtime environemnt (this includes setting environmental variables from Github Secrets).

Have a look at our [Workflow README](https://github.com/kpagacz/wiki-on-fire/tree/main/.github/workflows) for more information about our workflows.

## Amazon Secrets Manager
We use Amazon Secrets Manager to store the credentials to the production Amazon RDS instance. This way we don't have to include raw credential values in the Cloudformation YAML files, instead we reference the values stored in the Amazon Secret Manager.

## What is **NOT** covered by the Cloudformation YAML files
There is a (constantly decreasing) number of resources and configuration not covered by the YAML files in this directory. This means if you are interested in replicating the Wiki On Fire on your own AWS account, you will need to set the below **manually**. The rest is covered by the YAML files.

These include:
* an AWS Secrets Manager secret named `mysqlCredentials` which contains the username and password to the Amazon RDS instance
* an EC2 Key Pair named `wikionfire` - a key used to authenticate to the EC2 instance
* some AWS Lambda configuration of the environmental variables (we use Github workflows for those)
* building the frontend application, launching an Nginx server and launching a daemon with the backend application. However, we left a detailed guide on how to perform those actions on the the respective README pages.
