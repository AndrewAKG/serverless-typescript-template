export interface CountryCreateDTO {
  name: string;
  population: number;
  numberOfStates: number;
}

export interface CountryGetByNameDTO {
  name: string;
}
