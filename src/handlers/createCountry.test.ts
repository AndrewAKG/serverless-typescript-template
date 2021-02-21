import { handler } from './createCountry';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context
} from 'aws-lambda';

describe('Test Create Country', () => {
  test('Verify Create Country Response is returned', async () => {
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
