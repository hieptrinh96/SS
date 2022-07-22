import { createNotes } from './note.js';
import { setFilters } from './filters' 
import { renderNotes } from './views'

renderNotes()

// to get access to an element
document.querySelector('#create-note').addEventListener('click', (e) => {
    // the e.target allows us to change the button once it is clicked 
    // e.target.textContent = 'The button was clicked';
    
    // localStorage.setItem('notes', JSON.stringify(notes))
    // renderNotes();
    const id = createNotes()
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {    
    setFilters({
        searchText: e.target.value 
    })
    renderNotes();
})

document.querySelector('#filtered-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    }) 
    renderNotes();
})
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})

// console.log(getNotes())
// createNotes();
// updateNotes("0a3f641f-d9e1-468b-92a4-70bf8468986d", {
//     title: 'This is a title',
//     body: 'This is a body'
// })
// console.log(getNotes())
// console.log(getFilters());
// setFilters({
//     searchText: 'Office',
//     sortBy: 'byCreated'
// })
// console.log(getFilters())
// let notes = getSavedNotes()
// const filters = {
//     searchText: '',
//     sortBy: 'byEdited'
// }
// //  call the function once 