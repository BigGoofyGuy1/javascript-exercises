

const repeatString = function(string, num) {
    
    let stringRepeated = ''

    if (num < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < num; i++){
            stringRepeated += string
            

        }
        return stringRepeated
    }  
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1)
repeatString('hey')
repeatString('', 10)
// Do not edit below this line
module.exports = repeatString;
