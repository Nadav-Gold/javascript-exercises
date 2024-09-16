const getTheTitles = function(books) {
    return books.reduce((titles, currBook) => {
        titles.push(currBook.title);
        return titles;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
