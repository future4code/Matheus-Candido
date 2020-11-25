import verifyAge from "../src/cassino";
import { Casino, LOCATION, NACIONALITY, User1 } from "../src/model/cassinoModel";

describe("Cassino tests", () => {
    //4 - a)
    test("1 brazilian allowed", () => {
        const brazilian: User1 = {
            name: "Jescka",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const casino: Casino = {
            name: "Romarinho Braga",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Jescka"]);
        //5 - a)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
        expect(result.americans.unallowed.length).toBe(0);

    });

    //4 - b)
    test("1 american allowed", () => {
        const american: User1 = {
            name: "Math",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Romarinho Braga",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [american]);
        expect(result.americans.allowed).toEqual(["Math"]);
        //5 - b)
        expect(result.americans.unallowed.length).toBe(0);
    });

    //4 - c)
    test("No one allowed", () => {
        const brazilian: User1 = {
            name: "Jescka BR",
            age: 17,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const american: User1 = {
            name: "Math EUA",
            age: 17,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Romarinho Braga",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Jescka BR", "Jescka BR"]);
        expect(result.americans.unallowed).toEqual(["Math EUA", "Math EUA",]);
        //5 - c)
        expect(result.brazilians.unallowed).toContain("Jescka BR");
        expect(result.americans.unallowed).toContain("Math EUA");
    });

    //4 - d)
    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User1 = {
            name: "Jescka BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const american: User1 = {
            name: "Math EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        };

        const casino: Casino = {
            name: "Romarinho Braga",
            location: LOCATION.EUA,
        };

        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Jescka BR", "Jescka BR"]);
        expect(result.americans.allowed).toEqual(["Math EUA", "Math EUA"]);
        //5 - d)
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
    });
})