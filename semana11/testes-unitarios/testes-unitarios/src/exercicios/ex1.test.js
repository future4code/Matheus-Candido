import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
    test("retorna false pra 20050 D.C", () => {
        const resultado = checaBissexto(20050);

        expect(resultado).toEqual(false);
    });

    test("retorna false pra 50 A.C", () => {
        const resultado = checaBissexto(50);

        expect(resultado).toEqual(false);
    });

    test("retorna true pra 6148 D.C", () => {
        const resultado = checaBissexto(6148);
        expect(resultado).toEqual(true);
    });
});
