const getVisibleBooks = (allBooks, filter) => {
    return allBooks.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
};

const getShortDescribe = describe => {
    return describe.length > 280 
        ? describe.slice(0, 280) + '...' 
        : describe;
};

export { getVisibleBooks, getShortDescribe }