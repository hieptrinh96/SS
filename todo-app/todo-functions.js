// fetch existing todos from local storage
const getSavedTodos = () => {
    // first, we have to 'see' if there is data stored in our local storage
    const tasksJSON = localStorage.getItem('todos');
    // next set a condition to see if there is data 
    if (tasksJSON !== null) {
        return JSON.parse(tasksJSON);
    }
    else return [];
}

// save todos to local storage
const savedTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove todo by id
const removeTodo = id => {
    const todoIndex = todos.findIndex(todo => {
        return todo.id === id
    })
    if (todoIndex > -1) todos.splice(todoIndex, 1);
}
// Toggle the completed value for a gtiven todo
const toggleTodo = id => {
    const todo = todos.find(todo => {
        return todo.id === id;
    })
    if (todo !== undefined) todo.completed = !todo.completed;
}
// render application todos based on filters 
const renderedTodos = (todos, filters) => {
    // we still need to be able to search through the todos 
    const filteredTodos = todos.filter(task => {
        const searchTextMatch = task.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !task.completed;
        return searchTextMatch && hideCompletedMatch;
    })
    // filter out which tasks are left, save the value to a variable
    const incompleteTasks = filteredTodos.filter(task => !task.completed)
    // clearing the inputs
    document.querySelector('#todo').innerHTML = '';
    // add that summary variable to our body
    // before we create new p tags, we want to remove the other tasks that don't match the one we want

    document.querySelector('#todo').appendChild(generateSummaryDOM(incompleteTasks))
    
    filteredTodos.forEach(task => {
        // iterate through our todos array and create a new tag for each item
        // add each todo.text to our body
        document.querySelector('#todo').appendChild(generateTodoDOM(task));
        
    })
}
// get DOM elements for an individual note
const generateTodoDOM = task => {
    const root = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
    // set up todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;
    root.appendChild(checkbox);
    checkbox.addEventListener('change', (e) => {
        toggleTodo(task.id);
        savedTodos(todos);
        renderedTodos(todos, filters);
    })
    // set up todo text
    todoText.textContent = task.text;
    root.appendChild(todoText);
    // set up remove button 
    removeButton.textContent = 'x';
    root.appendChild(removeButton);
    removeButton.addEventListener('click', (e) => {
        removeTodo(task.id);
        savedTodos(todos);
        renderedTodos(todos, filters);
    })
    return root;
}
// get dom elements for list summary
 const generateSummaryDOM = incompleteTasks => {
     // create a new h2 tag
     const summary = document.createElement('h2');
     // set the textContent of summary to have our message
     summary.textContent = `You have ${incompleteTasks.length} tasks left`;
     return summary;
 }