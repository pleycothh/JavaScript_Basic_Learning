console.log('function start here')

// function are objects

/// 

function sum (){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5,6))

/// REST operator


function sum2 (discount, ...prices){ // rest operators, rest of the parameters
    const total = prices.reduce((a,b) => a+b);
    return total * (1- discount)

}
console.log(sum2(0.1,2,3,4,5,6,1))