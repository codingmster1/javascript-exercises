const repeatString = function(string, times) 
{
    if (times > 0)
    return string.repeat(times);
    else return "";
}

repeatString("hey", 3);


// Do not edit below this line
module.exports = repeatString;

