import { Injector } from '@sailplane/injector';

import { CreateCountryParams } from '../types/country.types';
import CountryRepository, {
  CountryDocument
} from '../repositories/country.repo';

/**
 * Interface for CountryService
 */
export interface ICountryService {
  createCountry(data: CreateCountryParams): Promise<void>;
  getCountryById(id: string): Promise<CountryDocument>;
}

/**
 * The actual class that contains all the business logic related to countries.
 * Handlers sanitize/validate(basic) and sends data to this class methods.
 */
export default class CountryService implements ICountryService {
  private countryRepository: CountryRepository = Injector.get(
    CountryRepository
  )!;

  public async createCountry(data: CreateCountryParams): Promise<void> {
    try {
      await this.countryRepository.create(data);
    } catch (e) {
      throw e;
    }
  }

  public async getCountryById(id: string): Promise<any> {
    try {
      const response = await this.countryRepository.getById(id);
      return response.Item;
    } catch (e) {
      throw e;
    }
  }
}
