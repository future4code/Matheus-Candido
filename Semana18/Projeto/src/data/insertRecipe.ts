import { connection } from "..";

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection('Cookenu_Recipes')
        .insert({
            id,
            title,
            description,
            deadline,
            author_id: authorId
        })
}