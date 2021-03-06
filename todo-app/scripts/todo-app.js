let todos = getSavedTodos();

    const filters = {
        searchText: '',
        hideCompleted: false 
    }


    renderedTodos(todos, filters);

// since we created the button tag in the html, we don't need to create it here
// we do need to use the eventListener to interact with the button though



// remove all the p tags with the word 'the';
// set a variable to access all the p tags with querySelectorAll
// then iterate through with filter
//  const ps = document.querySelectorAll('p')
// ps.forEach(p => {
    //     // we have to use textContent since we're searching through the value of the text
    //     if (p.textContent.includes('the')) p.remove();
    // })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderedTodos(todos, filters)
})
document.querySelector('#task-adder').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim();
    e.preventDefault();
    if (text.length > 0) {
        // we're adding a new task to our todo list 
        todos.push({
            // we're setting the value of whatever that task is to what the user inputs
            id: uuidv4(),
            text,
            completed: false
        })
        savedTodos(todos);
        renderedTodos(todos, filters);
        e.target.elements.text.value = '';
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    // this will update our hideCompleted from false to true 
    filters.hideCompleted = e.target.checked;
    renderedTodos(todos, filters);
})

// wire up the button event
// remove todo by id
// save and rerender the todos list