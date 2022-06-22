const checkList = [{
    task: 'Clean room',
    completed: false
}, {
    task: 'Go workout',
    completed: true
}, {
    task: 'Go through the Udemy course',
    completed: false
}, {
    task: 'Drink protein shakes',
    completed: false
}, {
    task: 'Pay bills',
    completed: true
}];
// we need to create the filters obj to use the searchText
const filters = {
    searchText: ''
};
// create a function to filter only the thing we type
const renderCheckList = (checkList, filters) => {
    const filteredCheckList = checkList.filter(list => {
        return list.task.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    // first, we want to filter out tasks that have not been completed
    const incomplete = filteredCheckList.filter(item => !item.completed);
    // add the innerHTML to clear our tasks
    document.querySelector('#Things').innerHTML = '';
    
    // then we want to print out how many tasks we have left to do 
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incomplete.length} things to do`;
    
    // then we have to add it to our div 
    document.querySelector('#Things').appendChild(summary);
    
    // we also want to print out every item in the checklist 
    filteredCheckList.forEach(list => {
        const pElement = document.createElement('p');
        pElement.textContent = list.task;
        document.querySelector('#Things').appendChild(pElement);
    })
}

// we have to call our function 
renderCheckList(checkList, filters);

// we can now add the button so we can add text to it
document.querySelector('#create-tasks').addEventListener('input', (e) => {
    consol.log('New Task Created');
})

// next we want to display the contents of the input element we put in 
document.querySelector('#Tasks').addEventListener('input', (e) => {
    console.log(e.target.value);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderCheckList(checkList, filters);
})



