const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


// print summary message with p 


// creating a new p element
// const todoList = document.createElement('p');
// iterate through our array to find the incompleted tasks
const incomplete = todos.filter(todo => {
    return !todo.completed
})
// create a new h2 element
const printMessage = document.createElement('h2');
// have it dynamically print out the number of tasks that are incomplete
printMessage.textContent = `You have ${incomplete.length} todos left`;
// push it into the body element
document.querySelector('body').appendChild(printMessage)

// iterate through array 
todos.forEach(todo => {
    // create a new element for each item in the array 
    const p = document.createElement('p');
    // set the textContent to whatever the todo.text is 
    p.textContent = todo.text;
    // finally push it into the body 
    document.querySelector('body').appendChild(p);
    
})

// creqate access to the button element
// changing the button to use it's unique id
document.querySelector('#start').addEventListener('click', (e) => {
    console.log('New task created') ;
})
//print paragraph for each to do, use text value



// this hides all the text and turns them into whatever we put in the textContent
// p.forEach(ps => {
    //     ps.textContent = '**********'
    // })
    //  adding a new element
    //  const newParagraph = document.createElement('p')
    //  newParagraph.textContent = 'This is a new element from Javascript'
    //  // this adds a new paragraph to the body. works just like array.push 
//  document.querySelector('body').appendChild(newParagraph);