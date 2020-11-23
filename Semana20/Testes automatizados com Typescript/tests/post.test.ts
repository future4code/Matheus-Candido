import { BaseDatabase } from "../src/data/BaseDatabase";
import { postDatabase } from "../src/data/postDatabase";

describe("Posts", () => {
    test("Create Post", async () => {
        const post = {
            id: "abcde",
            photo: "link",
            description: "Conteúdo",
            type: "normal",
            // created_at: new Date(),
            author_id: "0ce1687e-72ce-4168-bd41-32ee8709ebb0"
        };

        await postDatabase.insertPost(post);
        const postFromDb = await postDatabase.selectPost(post.id);

        expect(postFromDb).not.toBe(undefined);
        await expect(postFromDb).toEqual({
            id: "abcde",
            photo: "link",
            description: "Conteúdo",
            type: "normal",
            // created_at: new Date(),
            author_id: "0ce1687e-72ce-4168-bd41-32ee8709ebb0"
        });
    });

    // test("Create Post", async () => {
    //     try {
    //         const post = {
    //             id: "1234556910",
    //             photo: "link",
    //             description: "Conteúdo",
    //             type: "normal",
    //             author_id: "0ce1687e-72ce-4168-bd41-32ee8709ebb0"
    //         };

    //         await postDatabase.insertPost(post);
    //         await postDatabase.insertPost(post);
    //     } catch (err) {
    //         expect(err).not.toBe(undefined)
    //     }
    // });

    afterAll(async () => {
        // await postDatabase.deleteUser("abcde")
        await BaseDatabase.destroyConnection()
    })
})