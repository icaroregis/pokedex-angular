export interface IPokemonsList {
  count?: number;
  urlOfNumberOfPokemonsToDisplay?: 'string';
  previous?: null;
  results?: Array<{ name?: string; status?: any; url?: string }>;
}
