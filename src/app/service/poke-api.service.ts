import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPokemonsList } from '../interfacesModule/pokemon-list-services';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons(): Observable<IPokemonsList> {
    return this.http.get<IPokemonsList>(this.url).pipe(
      tap((response) => response),
      tap((response: any) => {
        response.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            /* montando uma nova propriedade e valor do objeto chamada status */
            (response: any) => (resPokemons.status = response)
          );
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe((res) => res);
  }
}
