import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
    it("retorna true para 'mirim'", () => {
        const ehPalindromo = checaPalindromo("mirim");
        expect(ehPalindromo).toEqual(true);
    });
    it("retorna true para 'ArarA'", () => {
        const ehPalindromo = checaPalindromo("ArarA");
        expect(ehPalindromo).toEqual(true);
        //retorna false se começãr com uma letra maiúscula.
    });
    it("retorna false para 'DÁBALE ARROZ A LA ZORRA EL ABAD'", () => {
        const ehPalindromo = checaPalindromo("DÁBALE ARROZ A LA ZORRA EL ABAD");
        expect(ehPalindromo).toEqual(false);
        //se digitar acentos retorna false
    });
    it("retorna true para 'ovo'", () => {
        const ehPalindromo = checaPalindromo("ovo");
        expect(ehPalindromo).toEqual(true);
    });
});
