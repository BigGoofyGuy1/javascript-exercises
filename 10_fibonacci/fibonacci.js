const fibonacci = function(Num) {
    let fibNum1 =0
    let fibNum2 =1
    let fibNumFinal =0
    fibNumFinal = parseInt (fibNumFinal)
    if(Num < 0) {
        return 'OOPS'
    } else if (Num == 1) {
        return 1;
    }
    for (let i = 0; i < (Num-1); i++) {
        fibNumFinal = fibNum1 + fibNum2
        

        fibNum1 = fibNum2
        
        fibNum2 = fibNumFinal
        
    }
    
    return fibNumFinal
};

// Do not edit below this line
module.exports = fibonacci;
