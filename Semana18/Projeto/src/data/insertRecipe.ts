import { connection } from "..";

export default async function insertRecipe(
    id_recipe: string,
    name: string,
    igredients: string,
    instructions: string,
    id_user: string,
    createdAt: Date
) {
    await connection('Cookenu_Recipes')
        .insert({
            id_recipe,
            name,
            igredients,
            instructions,
            id_user,
            createdAt
        })
}