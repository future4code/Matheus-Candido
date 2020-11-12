import { connection } from "..";

export default async function selectRecipe(
    id: string
) {
    const result = await connection('Cookenu_Recipes')
        .select('*')
        .where({ id })

    return result[0]
}