import { connection } from '..'
import { GENDER } from '../types';

export const createNewMovie = async (
    id: string,
    name: string,
    sinopse: string,
    releaseDate: Date,
    evaluation:number,
    playingLimitDate: Date
) => {
    try {
        await connection
            .insert({
                id: id,
                name: name,
                sinopse: sinopse,
                release_date: releaseDate,
                evaluation: evaluation,
                playing_limit_date: playingLimitDate,
            })
            .into("Filmes");
    } catch (error) {
        console.log(error, {id: id,
            name: name,
            sinopse: sinopse,
            release_date: releaseDate,
            evaluation: evaluation,
            playing_limit_date: playingLimitDate,})
    }
};


// export async function createNewPokemonWithQueryBuilder(
//     id: number,
//     name: string,
//     type: GENDER
// ): Promise<void> {
//     try {
//         await connection.insert({
//             id,
//             name,
//             type
//         })
//             .into("pokemons")
//         console.log("Sucesso")
//     } catch (error) {
//         console.log(error)
//     }
// }