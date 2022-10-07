const repeatString = function(string, times) 

{
    if (times > 0)
    return string.repeat(times);
    times = 3;
    
}

repeatString("hey", 3);

const repeatString1 = function(string, times)
{
    if (times > 0)
    return string.repeat(times);
    times = 10;
}

repeatString1("hey", 10);


// Do not edit below this line
module.exports = repeatString;

