import { Component, OnInit } from '@angular/core';
import { IPokemonsList } from 'src/app/interfacesModule/pokemon-list-services';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: IPokemonsList | any = [];
  private setAllPokemons: IPokemonsList | any = [];

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((response) => {
      this.setAllPokemons = response.results;
      this.getAllPokemons = response.results;
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((pokemon: any) => {
      return pokemon?.name?.indexOf(value.toLowerCase()) !== -1;
    });

    this.getAllPokemons = filter;
  }
}
