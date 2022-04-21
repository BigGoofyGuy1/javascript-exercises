const palindromes = function (word) {
    let pali = false
    let arr1 = []
    let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    // Sanitize punctuation
    function removePunctuation(string) {
        return string.replace(punctuation, '');
      }

    console.log('Base ' + word )
    
    word = removePunctuation(word.toLowerCase().replace(/\s/g, ''))

    console.log('Punctuation removed: ' + word)

    //Push word to new array
    for(let i = word.length; i >= 0; i--) {
        arr1.push(word[i])
    }
    
    //Compare word and Array
    arr1 = arr1.join('')
    console.log(arr1)
    if(arr1 === word) {
        pali = true
    } else {
        pali = false
    }
    return pali
};

// Do not edit below this line
module.exports = palindromes;
