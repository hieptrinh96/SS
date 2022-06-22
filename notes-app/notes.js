// DOM - docuument object model
// document is an object
// Query and remove takes the first match it finds
// const p = document.querySelector('p')
// p.remove();

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// this gives us access to our button element. 
// the .addEventListener enables us to choose what happens to the button 
// since we chose click, when we click on the button, the arrow function runs 
document.querySelector('#create-note').addEventListener('click', e => {  
    e.target.textContent = 'The button was pressed'
})
 

// since querySelectorAll is to get all the elements, using the index 1 gives us access to the second button 
// we can also set unique id's which is easier to dete rmine which button we're working on

// we changed the querySelectorAll for just the selector since we have the unique id's
// sidenote, if we didn't use the unique id's the order of the buttons would give us errors if they 
// weren't in the order that we wrote it. 
// with the unique id's we can change the order however we want without issue

// id's use # while classes use .
// selector is used for individual id's, selectorAll is used for classes
document.querySelector('#remove-all').addEventListener('click', () => {
    document.querySelectorAll('.note').forEach(note => note.remove())
})

// you can also chain these together (refer to udemy for reference)

// Query all and remove
// const ps = document.querySelectorAll('p');
// ps.forEach(p => {
//     p.textContent = '***********'
    // console.log(p.textContent)
    // p.remove();
// })


