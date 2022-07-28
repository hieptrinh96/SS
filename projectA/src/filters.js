// object for us to sort notes
const filters = {
    searchText: '',
    sortBy: 'byCreated'
}

// save our object in a function 
const noteFilter = () => filters;

// update the searchText
const filterSetter = updates => {
    if (typeof updates.searchText === 'string') filters.searchText = updates.sortBy;
    if (typeof updates.sortBy === 'string') filters.sortBy = updates.sortBy;
}

export { noteFilter, filterSetter } 
