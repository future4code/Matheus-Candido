"use strict";
exports.__esModule = true;
exports.indexOf = void 0;
exports.indexOf = function (source, query) {
    var result = source.split("");
    var letra;
    result.map(function (letter, index) {
        if (letter === query) {
            letra = index;
        }
        return letra;
    });
    console.log(letra);
    // console.log(result)
    // for (let i = 0; i < source.length; i++) {
    //     if (source[i] === query) {
    //         return i
    //     }
    // }
};
exports.indexOf("Hellow", "o");
