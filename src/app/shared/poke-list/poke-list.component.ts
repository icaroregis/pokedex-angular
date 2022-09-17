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
  public setAllPokemons: IPokemonsList | any = [];
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next: (response) => {
        this.setAllPokemons = response.results;
        this.getAllPokemons = response.results;
      },
      error: (error) => (this.apiError = true),
    });
  }

  public getSearch(value: string) {
    this.getAllPokemons = this.setAllPokemons.filter((pokemon: any) => {
      return pokemon?.name?.indexOf(value.toLowerCase()) !== -1;
    });
  }
}
