const removeFromArray = function(arr) {

    var badValues = Array.prototype.slice.call(arguments);
    badValues.shift(); 
    return arr.filter(function(x) {return badValues.indexOf(x) == -1;});

}
console.log([1, 2, 3, 4], 3);
console.log([1, 2, 3, 4], 1, 2);


// Do not edit below this line
module.exports = removeFromArray;
