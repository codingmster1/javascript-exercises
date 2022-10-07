const removeFromArray = function() {
let removeFromArray = [1, 2, 3, 4,];
let values = [1, 2, 4];

removeFromArray = removeFromArray.filter(item => !values.includes(item));
console.log(removeFromArray);

};

// Do not edit below this line
module.exports = removeFromArray;
