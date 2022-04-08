

const sumAll = function(x, y) {
    
    if (isNaN(x) || typeof(x)!="number") {
        return 'ERROR'
    }
    if (isNaN(y) || typeof(y)!="number") {
        return 'ERROR'
    }

    
    

    let bigNum = 0
    let smallNum = 0
    if (x > y) {
        bigNum = x
        smallNum = y
    } else {
        bigNum =y
        smallNum = x
    }
    
    if (bigNum < 0 || smallNum < 0) {
        return 'ERROR'
    }

    let total = 0
        for (let i = smallNum; i <= bigNum; i++) {
            
            total = total + i
            
        }
        return total
};

// Do not edit below this line

module.exports = sumAll;
