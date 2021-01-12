export const indexOf = (source: string, query: string): void => {

    const separation = source.split("")

    let result: number;

    separation.map((letter, index) => {
        if (letter === query) {
            result = index
            
        }

        return result
    })

    console.log(result)


    
    // for (let i = 0; i < source.length; i++) {
    //     if (source[i] === query) {
    //         result = i
    //     }
            // return result
    // }
    // console.log(result)
}
    
indexOf("Hellow", "o")