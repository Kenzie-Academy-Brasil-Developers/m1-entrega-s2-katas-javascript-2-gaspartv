// comece a criar a sua função add na linha abaixo
function add(numeroUm, numeroDois) {
    let resultado = 0
    let loop = numeroUm + numeroDois
    for (let i = 0; i < loop; i++) {
        resultado++
    }
    return resultado
}
// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(numeroUm, numeroDois) {
    let resultado = 0
    for (let i = 0; i < numeroUm; i++) {
        resultado = add(resultado, numeroDois)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let resultado = x
    for (let i = 0; i < n -1; i++) {
        resultado = multiply(resultado, x)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(numero) {
    let arrayNumero = []
    for (let i = 0; i < numero; i++) {
        arrayNumero.push(i + 1)
    }
    arrayNumero.reverse()
    let resultado = numero
    for (let i = 1; i < arrayNumero.length; i++) {
        resultado = multiply(resultado, arrayNumero[i])
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    let arrayResultado = [0, 1]
    let resultado = 0
    for (let i = 1; i < n; i++) {
        let resultadoAtual = add(arrayResultado[i], arrayResultado[i-1])
        arrayResultado.push(resultadoAtual)
        resultado = resultadoAtual
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
