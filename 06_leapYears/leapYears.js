const leapYears = function(yearToCheck) {

    let divBy4 = false
    let divBy100 = false
    let divBy400 = false

    let leap = false
    if (yearToCheck %4 === 0) {
        divBy4 = true
    }

    if (yearToCheck %100 === 0) {
        divBy100 = true
    }

    if (yearToCheck %400 === 0) {
        divBy400 = true
    }

    console.log(divBy4, divBy100, divBy400)

    if (divBy4 === true) {
        leap = true
    }

    if (divBy100 === true) {
        leap = false

        if (divBy400 === true) {
            leap = true
        }
    }



    
    

    return leap
};

// Do not edit below this line
module.exports = leapYears;
