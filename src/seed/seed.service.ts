import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { map, tap } from 'rxjs';
import { HttpModuleAdapter } from '../common/adapters/http-module.adapter';
import { Pokemon } from '../pokemon/entities';
import { PokeResponse, Result } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    private readonly http: HttpModuleAdapter,
    @InjectModel(Pokemon.name) private pokemonModel: Model<Pokemon>,
  ) {}

  private async guardarPokemon(pokemon: Result[]) {
    await this.pokemonModel.deleteMany({});
    const pokemonToInsert: { name: string; no: number }[] = [];

    pokemon.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      pokemonToInsert.push({ name, no });
    });
    await this.pokemonModel.insertMany(pokemonToInsert);
  }

  executeSeed() {
    return this.http
      .get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=100')
      .pipe(
        map((resp) => {
          return resp.results;
        }),
        tap(async (resp) => {
          await this.guardarPokemon(resp);
        }),
      );
  }
}
