function fibonacci(num) {
    let numA = 0, numB = 1, numC = 0;
    let numFib = []
    for (let i = 1; i <= num; i++) {
        numC = numA + numB;
        numA = numB;
        numB = numC;
        numFib.push(numC);
    }
    const isInArray = numFib.includes(num);
    if (isInArray === true) { return console.log('É um número Fibonacci') }
    else { return console.log('Não é um número Fibonacci') };
    console.log(isInArray)
}
fibonacci(55);