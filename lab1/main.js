'use strict'

const GetDiscriminant = (a, b, c) => {
    return b * b - (4 * a * c)
}

const NumToString = num => {
    return num > 0 ? `+ ${num}` : `${num}`
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

const Interactive = () => {
    const questions = ["a = ", "b = ", "c = "];
    const params = [];
  
    const checkNumber = (data) => {
      return (
        data.toString().trim() === parseInt(data.toString()).toString().trim() ||
        data.toString().trim() === parseFloat(data.toString()).toString().trim()
      );
    };
  
    process.stdin.on("data", (data) => {
      if (params.length < questions.length) {
        const parsedData = parseFloat(data.toString());
        if (params.length === 0 && parsedData === 0) {
          console.log("Error. a cannot be 0");
          process.stdout.write(questions[0]);
        } else if (!checkNumber(data)) {
          console.log(
            `Error. Expected a valid real number, got ${data
              .toString()
              .trim()} instead`
          );
          process.stdout.write(questions[params.length]);
        } else {
          params.push(parsedData);
          if (params.length < questions.length) {
            process.stdout.write(questions[params.length]);
          } else {
            (QuadraticEquationSolver(...params));
            process.exit(0);
          }
        }
      }
    });
  
    process.stdout.write(questions[0]);
  };

Interactive()