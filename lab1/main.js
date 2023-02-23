'use strict'

const GetDiscriminant = (a, b, c) => {
    return b * b - (4 * a * c)
}

const NumToString = num => {
    if(num > 0) {
        return num === 1 ? '+' : `+ ${num}` 
    }
    if(num < 0) {
        return num === -1 ? '-' : `${num}` 
    }
} 

const EquationLog = (a, b, c, D) => {
    const a1 = NumToString(a)
    const b1 = NumToString(b)
    const c1 = NumToString(c)
    console.log(`Equation is: ${a1}x^2 ${b1}x ${c1} = 0`)
    let roots = 2;
    if(D === 0) roots = 1;
    if(D < 0) roots = 0;
    console.log(`There are ${roots} roots`);
}

const QuadraticEquationSolver = (a, b, c) => {
    if (!a) console.log(`Expected a valid real number, got ${a} instead`)
    const D = GetDiscriminant(a, b, c)
    EquationLog(a, b, c , D)
    const x1 = (-b + Math.sqrt(D)) / (2 * a)
    const x2 = (-b - Math.sqrt(D)) / (2 * a)
    if(x1) console.log("x1:" + x1)
    if(x2 && x2 !== x1) console.log("x2:" + x2)
}

QuadraticEquationSolver(9, -30, 25)