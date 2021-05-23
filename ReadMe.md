# Example Serverless Rest Api with TypeScript and Custom Lambda Authorizer

## Usage

- clone the repo `git clone https://github.com/AndrewAKG/serverless-rest-api-typescript.git`
- navigate to directory `cd serverless-rest-api-typescript`
- install dependencies `npm install`
- make sure you have aws or serverless cli installed with required credentials

## Deployment

- `sls deploy -v --stage <stage> --region <region>`

## Current EndPoints

- POST - /register
- POST - /login
- GET - /countries/{name}
- POST - /countries
