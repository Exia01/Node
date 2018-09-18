
let counter = (arr) => {
    return 'There are ' + arr.length + ' elements in this array'
}

let sumTotal = (a, b) => {
    /* These`` are considered templating strings
    We can embed variables or expression without concatenating them. */
    return `The sum of the 2 numbers is ${a+b} `
    
}

let pi = 3.142

/* This is known as object literal notation */
module.exports = {
    counter: counter,
    sumTotal: sumTotal,
    pi: pi
}

/* This is another way of how we could we export these 
module.exports.counter = counter;
module.exports.sumTotal = sumTotal;
module.exports.pi = pi;

module.exports.counter = (arr) => {
    return 'There are ' + arr.length + ' elements in this array'
}

or tie them directly to the function

module.exports.sumTotal = (a, b) => {
    These`` are considered templating strings
    We can embed variables or expression without concatenating them
    return `The sum of the 2 numbers is ${a+b} `

}
module.exports.pi = 3.142


*/

