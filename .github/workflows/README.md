### Introduction
This is the a directory with the Github Workflows automation scripts. You can read about Github Workflows more in here: https://docs.github.com/en/actions/learn-github-actions

The Workflows in this directory are part of our continuous integration and deployment strategy. They serve to build, test and publish the latest version of the application.

### Responsibilities
Our GitHub Actions help us: manage the AWS Amazon architecture, update the development docker images, build and publish documentation. The small descriptions below detail the singular resposnibilties of the worflows:
* https://github.com/kpagacz/wiki-on-fire/blob/main/.github/workflows/build-and-publish-devel-env.yaml - build and publish the cusotm nginx docker - a part of the development environment we used while developing WikiOnFire. Triggered automatically on any changes to the directory holding the nginx configuration.
* https://github.com/kpagacz/wiki-on-fire/blob/main/.github/workflows/build-deploy-docs.yaml - build and deploy documentation of the backend application. The documentation is built and published to an Amazon S3 Bucket that serves the docs as a [static HTML webpage](http://jsdocs-backend-wof.s3-website.eu-central-1.amazonaws.com/index.html). Triggered on any changes to the code in the backend directory. This essentially ensures that our backend documentation is always up-to-date.
* https://github.com/kpagacz/wiki-on-fire/blob/main/.github/workflows/deploy-wikimedia-lambda.yaml - builds and deploys the AWS Lambda function responsible for downloading data from the Wikimedia API. This Workflow is triggered on any changes to the code in the directory of this Lambda. This ensures that our Lambda function on AWS, in the production environment, is always up-to-date.
* https://github.com/kpagacz/wiki-on-fire/blob/main/.github/workflows/seed-dynamo.yaml - a script to seed the DynamoDB table with the most viewed articles from the past 100 days. This script can be triggered manually by any collaborator. Its goal is to ensure a sizeable amount of initial data in our data stores when the application is freshly launched or re-launched.
