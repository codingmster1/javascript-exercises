const leapYears = function(year) {
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 ===0);
}
console.log(leapYears(2016));
console.log(leapYears(2000));
console.log(leapYears(1700));
console.log(leapYears(1800));
console.log(leapYears(100));

// Do not edit below this line
module.exports = leapYears;
