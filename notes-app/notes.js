// DOM stands for document Object Model 
const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
    }, {
        title: 'Habbits to work on',
        body: 'Exercise. Eat a bit better.'
    }, {
        title: 'office modifications',
        body: 'Get a new seat'
    }]
// we can mutate that specific p tag with querySelector
// querySelector only looks at the first p element, will not affect the other p's
// const p = document.querySelector('p')
// // // removes the element selected
// // p.remove();


// querySelectorAll returns an array

// // we can use a forEach method to remove every p element;
// // ps.forEach(p => p.remove());

// // QuerySelectorAll affects all the p elements 
// const ps = document.querySelectorAll('p')

// // this will change the value of each p element to whatever we put in the string 
// ps.forEach(p => console.log(p.textContent = '******'));
// // how to 'render' which is just adding elements
// // create a new element, update the textContent, and pick a place to put it
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from JS';
// // first we select where we want to add our new p element.
// // then we use appendChild to add that element to the end of the body element
// // anytime you use appendChild, it will add the content to the end of that element
// // so since we want to add it to the body, it will be added after all the other elements in the body 
// document.querySelector('body').appendChild(newParagraph)
const filters = {
    searchText: ''
}
// our function allows us to filter/find notes
const renderNotes = (notes, filters) => {
    // we're returning the notes.title that matches wat the user inputs on the webpage
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    // This allows us to remove the notes that do not match the one the user is searching for
    // we want to use a div since if we use body, we would clear everything 
    document.querySelector('#notes').innerHTML = '';
    // this creates a new p tag for the ones the user searches for
    filteredNotes.forEach(note => {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        // we're adding the div element since 
        document.querySelector('#notes').appendChild(noteEl);
    })
}

//  call the function once 
renderNotes(notes, filters)

// to get access to an element
document.querySelector('#create-note').addEventListener('click', (e) => {
    // the e.target allows us to change the button once it is clicked 
    e.target.textContent = 'The button was clicked';
})



// to target everything in a class, we have to use querySelectorAll and add a period before
// the class name
// document.querySelectorAll('.notes').forEach(note => note.remove())

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

document.querySelector('#filtered-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})