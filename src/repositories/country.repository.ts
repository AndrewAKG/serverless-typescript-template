import Repository from "./repository";

/**
 * The schema definition. In other word,
 * A Document of the countries table contains following fields.
 */
export interface CountryDocument {
  name: string;
  population: number;
  numberOfStates: number;
}

/**
 * Country repository. In the constructor we pass the table name to the
 * parent constructor.
 *
 */
export default class CountryRepository extends Repository<CountryDocument> {
  constructor() {
    super(process.env.COUNTRIES_TABLE || "countries-dev"); // Passing table name
  }
}
