import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para '[1, 1]'", () => {
        const resultado = checaItensDuplicados([-1, -1, 1, -1, 1]);
        expect(resultado).toEqual(true);
        //retorna true mesmo com numeros negativos
    });

    it("retorna false para '[5, 5, 3, 6, 5, 6]'", () => {
        const resultado = checaItensDuplicados([-95, 95, 6, -95, 6]);
        expect(resultado).toEqual(true);
    });

    it("retorna true para '[20, 6, 551, 551]'", () => {
        const resultado = checaItensDuplicados([20, 6, 551, 551]);
        expect(resultado).toEqual(true);
    });

    it("retorna false para '[1, 2, 3]'", () => {
        const resultado = checaItensDuplicados([20, 90 ], [90]);
        expect(resultado).toEqual(false);
        
    });
});
