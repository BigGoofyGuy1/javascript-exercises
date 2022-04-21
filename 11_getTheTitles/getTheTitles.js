const getTheTitles = function(arr) {
    titles =[]
    let authors = []
    
        arr.forEach((element, index, array) => {
            titles.push(element.title)
            authors.push(element.author)
        })
    
    return titles
    
};

// Do not edit below this line
module.exports = getTheTitles;
