const todos = [{
    text: 'Order dog food',
    completed: false
    }, {
        text: 'Clean kitchen',
        completed: true
    }, {
        text: 'buy food',
        completed: true
    }, {
        text: 'Study more',
        completed: false
    }, {
        text: 'Exercise',
        completed: true
    }];

    const filters = {
        searchText: '',
        hideCompleted: false 
    }

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
        // create a new h2 tag
        const summary = document.createElement('h2');
        // set the textContent of summary to have our message
        summary.textContent = `You have ${incompleteTasks.length} tasks left`;
        // add that summary variable to our body
        // before we create new p tags, we want to remove the other tasks that don't match the one we want
        
        document.querySelector('#todo').appendChild(summary)
        document.querySelector('#search-text').innerHTML = '';
        filteredTodos.forEach(task => {
            // iterate through our todos array and create a new tag for each item
            const paragraphs = document.createElement('p');
            // set the content of each p tag to our todo.text
            paragraphs.textContent = task.text;
            // add each todo.text to our body
            document.querySelector('#todo').appendChild(paragraphs);
        })
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
    e.preventDefault();
    // we're adding a new task to our todo list 
    todos.push({
        // we're setting the value of whatever that task is to what the user inputs
        text: e.target.elements.text.value,
        completed: false
    })
    renderedTodos(todos, filters);
    e.target.elements.text.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    // this will update our hideCompleted from false to true 
    filters.hideCompleted = e.target.checked;
    renderedTodos(todos, filters);
})

// create a new checkbox and setup even listener (hide completed)
// create new hidecompleted filter (default false)
// update hidecompleted and rerender list on checkbox change
// setup rendertodos to remove completed items