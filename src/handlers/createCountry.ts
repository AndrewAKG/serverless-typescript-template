/**
 * Create Country API
 *
 * @packageDocumentation
 */

import 'source-map-support/register';
import * as LambdaUtils from '@sailplane/lambda-utils';
import * as createError from 'http-errors';
import CountryService from '../services/country.service';
import { CreateCountryParams } from '../types/country.types';

const countryService = new CountryService();

/** AWS Lambda entrypoint */
export const handler = LambdaUtils.wrapApiHandler(
  async (event: LambdaUtils.APIGatewayProxyEvent) => {
    const country: CreateCountryParams = event.body;
    const { name, numberOfStates, population } = country;

    // validate missing inputs
    if (!name || !numberOfStates || !population) {
      throw new createError.BadRequest(
        'Missing one of these inputs(name, numberOfStates, population)'
      );
    }

    // validate input types
    if (
      !Number.isInteger(numberOfStates) ||
      !Number.isInteger(population) ||
      !(typeof name === 'string')
    ) {
      throw new createError.BadRequest(
        'These inputs must be integers (numberOfStates, population), name must be a valid string'
      );
    }

    // validate country doesn't exist before
    const countryDetails = await countryService.getCountryById(name);
    if (countryDetails) {
      throw new createError.Forbidden('Country with same name already exists!');
    }

    try {
      await countryService.createCountry(country);
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Country created successfully!',
          data: country
        })
      };
    } catch (e) {
      throw new createError.InternalServerError(
        'Server under maintenance! try again later!'
      );
    }
  }
);
