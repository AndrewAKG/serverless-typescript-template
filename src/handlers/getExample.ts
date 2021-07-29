import 'source-map-support/register';
import * as LambdaUtils from '@sailplane/lambda-utils';

/** AWS Lambda entrypoint */
export const handler = LambdaUtils.wrapApiHandler(
  async (event: LambdaUtils.APIGatewayProxyEvent) => {
    console.log('event', event);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Country details returned successfully!'
      })
    };
  }
);
