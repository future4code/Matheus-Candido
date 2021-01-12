import { arrayNumbers, resultTotals } from "./Exemplo";

describe('Exemplo function', () => {
    it("If the function returns the correct result", async () => {

        arrayNumbers.slice(7, 1)
        expect(resultTotals(arrayNumbers)).toEqual(8)
    })
    it("If the function returns the correct result", async () => {

        arrayNumbers.slice(7, 1)
        expect(resultTotals(arrayNumbers)).not.toEqual(7)
    })
});