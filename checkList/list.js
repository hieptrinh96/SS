let checkList = [{
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
    searchText: '',
    hideCompleted: false
};

// check for existing saved data 
const listJSON = localStorage.getItem('lists');

if (listJSON !== null) {
    checkList = JSON.parse(listJSON);
}

// localStorage.setItem('location', 'Leander')
// to add data to our local storage we would use localStorage
// console.log(localStorage.getItem('location')) 

// const user = {
//     name: 'Mike',
//     age: 26
// }
// this turns JS objects into strings 
// JSON stands for javascript Object notation 
// this turns strings into objects
// const userJSON = JSON.stringify(user);
// console.log(userJSON);

// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON);
// console.log(user.name, user.age)

// create a function to filter only the thing we type
const renderCheckList = (checkList, filters) => {
    const filteredCheckList = checkList.filter(list => {
        const searchTextToMatch = list.task.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !list.completed;
        return searchTextToMatch && hideCompletedMatch;
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
// document.querySelector('#create-tasks').addEventListener('input', (e) => {
//     consol.log('New Task Created');
// })

// // next we want to display the contents of the input element we put in 
// document.querySelector('#Tasks').addEventListener('input', (e) => {
//     console.log(e.target.value);
// })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderCheckList(checkList, filters);
})

document.querySelector('#new-checklist').addEventListener('submit', (e) => {
    e.preventDefault();
    checkList.push({
        // we use .text since we set the name property as text for the input 
        task: e.target.elements.text.value,
        completed: false
    })
    renderCheckList(checkList, filters);
    e.target.elements.text.value = ''; 
})
document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})
// document.querySelector('#hide-completed').addEventListener('change', (e) => {
//     filters.hideCompleted = e.target.checked;
//     renderCheckList(checkList, filters);
// })

