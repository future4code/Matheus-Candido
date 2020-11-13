import { connection } from "..";

export default async function insertRecipe(
    id: string,
    name: string,
    igredients: string,
    instructions: string,
    user_id: string,
    createdAt: Date
) {
    await connection('Cookenu_Recipes')
        .insert({
            id,
            name,
            igredients,
            instructions,
            user_id,
            createdAt
        })
}