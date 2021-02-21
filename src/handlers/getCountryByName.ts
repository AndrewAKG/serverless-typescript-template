/**
 * Get Country by Name API
 *
 * @packageDocumentation
 */

import 'source-map-support/register';
import * as LambdaUtils from '@sailplane/lambda-utils';
import * as createError from 'http-errors';
import CountryService from '../services/country.service';

const countryService = new CountryService();

/** AWS Lambda entrypoint */
export const handler = LambdaUtils.wrapApiHandler(
  async (event: LambdaUtils.APIGatewayProxyEvent) => {
    const countryName = event.pathParameters['name'];
    if (!countryName) {
      throw new createError.BadRequest('Missing path parameter {name}');
    }

    try {
      const countryDetails = await countryService.getCountryById(countryName);

      if (!countryDetails) {
        throw new createError.NotFound(
          'Country with this name does not exist!'
        );
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Country details returned successfully!',
          data: countryDetails
        })
      };
    } catch (e) {
      console.log('INTENRAL ERROR', e);
      throw new createError.InternalServerError(
        'Server under maintenance! try again later!'
      );
    }
  }
);
