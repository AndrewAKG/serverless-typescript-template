/**
 * Create Country API
 *
 * @packageDocumentation
 */

import "source-map-support/register";
import * as LambdaUtils from "@sailplane/lambda-utils";
import * as createError from "http-errors";

/** AWS Lambda entrypoint */
export const handler = LambdaUtils.wrapApiHandler(
  async (event: LambdaUtils.APIGatewayProxyEvent) => {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event
      })
    };
  }
);
