const sumAll = function(a, d, range=[]) {

    if (a < 0 || b < 0) return 'ERROR'
    if (isNaN(a) || isNaN(b)) return 'ERROR'

    for (let i = Math.min(a, d); i<= Math.max(a, d); i++) {
        range.push(i)
    }

    return range.reduce((a, d) => a + b) 
}

console.log(sumAll(1,10));
console.log(sumAll(10,1));
console.log(sumAll(-10,1));
console.log(sumAll(1,-10));
console.log(sumAll(1,'a'));
console.log(sumAll('a',1));
console.log(sumAll('a',-1));



// Do not edit below this line
module.exports = sumAll;
