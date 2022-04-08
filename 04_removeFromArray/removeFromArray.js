const removeFromArray = function(array, ...num) {
    
    for (let i =0; i < array.length; i++) {
        console.log("array:" + array[i])
        
        for( let j of [...num]){ 
            console.log("num: " + j)

            if (array[i] === j) {
                array.splice(i, 1)
                i--
                
            }            
        }
        
    }

    return array
};


// Do not edit below this line
module.exports = removeFromArray;
