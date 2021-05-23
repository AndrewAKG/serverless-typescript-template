export interface CreateCountryParams {
  name: string;
  population: number;
  numberOfStates: number;
}

export interface GetCountryByNameParams {
  name: string;
}
