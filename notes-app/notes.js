// DOM stands for document Object Model 
const notes = getSavedNotes()
            // local storage lesson 
// storing data and fetching it later
// must be able to perform the 4 basic CRUD operations: Create, Read, Update, and Delete
// Create
// localStorage.setItem('location','Leander')
// // Read
// localStorage.getItem('location')
// // Delete
// localStorage.removeItem('location');
// // this will clear all the data within the local storage
// localStorage.clear()

// const user = {
//     name: 'Mike',
//     age: 27
// }
// // JS OIbject Notation
// // stringify takes in an object or array and turns it into a string
// const userJSON = JSON.stringify(user);
//  localStorage.setItem('user', userJSON);

// but since it is a string, we're unable to access the object's data such as name or age
// to access it, we must change it back into an object/array with the parse method 
// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)


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
//  call the function once 
renderNotes(notes, filters)

// to get access to an element
document.querySelector('#create-note').addEventListener('click', (e) => {
    // the e.target allows us to change the button once it is clicked 
    // e.target.textContent = 'The button was clicked';
    notes.push({
        id: uuidv4(),
        title: '',
        body: '',
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters);
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