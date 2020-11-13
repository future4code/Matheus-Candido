import { connection } from "..";

export default async function selectRecipe(
    id_recipe: string
) {
    const result = await connection('Cookenu_Recipes')
        .select('*')
        .where({ id_recipe })

    return result[0]
}