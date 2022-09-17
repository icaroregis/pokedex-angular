import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from '../../service/poke-api.service';
import { PokemonCharacteristics } from '../../interfacesModule/pokemon-characteristics';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: PokemonCharacteristics | any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activeRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(): Object {
    const id = this.activeRouter.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: (response) => {
        return (this.pokemon = response), (this.isLoading = true);
      },
      error: (error) => (this.apiError = true),
    });
  }
}
