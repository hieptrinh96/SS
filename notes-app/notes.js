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

//to render our information 
// create a new object with an empty string
const filters = {
    searchText: ''
}
// create a new function that filters what we want 
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(note => {
        // in this case, we want to filter the notes obj so it only contains what we put
        // which is why we put filters, our empty string, and the searchText
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // this line would clear what we've been adding 
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(note => {
        const noteEl = document.createElement('p');
        // this iterates and creates new p elements that is the note.title
        noteEl.textContent = note.title;
        // we're just adding them to our div id
        document.querySelector('#notes').appendChild(noteEl);
    })
}
renderNotes(notes, filters);

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
// document.querySelector('#remove-all').addEventListener('click', () => {
//     document.querySelectorAll('.note').forEach(note => note.remove())
// })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})
document.querySelector('#for-fun').addEventListener('change', (e) => {
    console.log(e.target.checked)
})
// document.querySelector('#name-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     // e.target gives us access to DOM and the .elements gives us access to the values of form
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = '';
// })

// you can also chain these together (refer to udemy for reference)

// Query all and remove
// const ps = document.querySelectorAll('p');
// ps.forEach(p => {
//     p.textContent = '***********'
    // console.log(p.textContent)
    // p.remove();
// })


// set up a div so we can move it anywehre we want 
// we can target specific one with the id's 
// the innerHTML is used to clear the info 
 