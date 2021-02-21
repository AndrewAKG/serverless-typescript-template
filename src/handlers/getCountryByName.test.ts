import { handler } from './getCountryByName';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context
} from 'aws-lambda';

describe('Test Get Country By Name', () => {
  test('Verify Get Country by name Response is returned', async () => {
    function unusedCallback<T>() {
      return (undefined as any) as T; // eslint-disable-line @typescript-eslint/no-explicit-any
    }

    const data = await handler(
      {} as APIGatewayProxyEvent,
      {} as Context,
      unusedCallback<any>() // eslint-disable-line @typescript-eslint/no-explicit-any
    );
    expect((data as APIGatewayProxyResult).statusCode).toBe(200);
  });
});
