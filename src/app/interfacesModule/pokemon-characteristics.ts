export interface PokemonCharacteristics {
  valueOne: Array<CharacteristicsOne>;
  valueTwo: Array<CharacteristicsTwo>;
}

interface CharacteristicsOne {
  name: string;
  sprites: any;
}

interface CharacteristicsTwo {
  names: Array<namesPokemons>;
}

interface namesPokemons {
  name: string;
}
