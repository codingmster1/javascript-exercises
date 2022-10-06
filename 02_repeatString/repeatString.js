const repeatString = function(string, times) {

    var repeatedString = "";
    while (times > 0) {
        repeatedString += string;
        times--;
    }
    return repeatedString;

}

repeatString("hey", 10);



// Do not edit below this line
module.exports = repeatString;

const repeatString1 = function(string, times)
{
    var repeatedString ="";
    while (times > 0) {
        repeatedString += string;
    }
    return repeatedString;
}
repeatString("hey", 1);

module.exports = repeatString1;