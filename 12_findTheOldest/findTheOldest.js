const findTheOldest = function(arr) {
    let dob =[]
    let dod =[]
    let age ={}
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy;
    for(let i =0; i < arr.length; i++) {
        if('yearOfDeath' in arr[i] === false) {
            arr[i].yearOfDeath = today
        } 
    }
    arr.forEach(element => {
        dob.push(element.yearOfBirth)
        dod.push(element.yearOfDeath)
    });

    for(let i = 0; i < dob.length; i++) {  
        age = (dod[i]-dob[i])     
        arr[i].age = age
    }
    const sorter1 = (a, b) => a.age > b.age ? -1 : 1;
    arr.sort(sorter1)

    //console.log(dob)
    //console.log(dod)
    console.log(arr)


    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
