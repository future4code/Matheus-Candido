import { connection } from '..'
import { GENDER } from '../types';

export async function createNewMovie(
    id: string,
    name: string,
    sinopse: string,
    release_date: Date,
    evaluation: string,
    playing_limit_date: Date
): Promise<void> {
    try {
        await connection.raw(`
        INSERT INTO Filmes (id,name,sinopse,release_date,evaluation,playing_limit_date) VALUES(
            "${id}"
            "${name}"
            "${sinopse}"
            "${release_date}"
            "${evaluation}"
            "${playing_limit_date}"
        )
        `)
        console.log("Sucesso")
    } catch (error) {
        console.log(error)
    }
}

export async function createNewPokemonWithQueryBuilder(
    id: number,
    name: string,
    type: GENDER
): Promise<void> {
    try {
        await connection.insert({
            id,
            name,
            type
        })
            .into("pokemons")
        console.log("Sucesso")
    } catch (error) {
        console.log(error)
    }
}