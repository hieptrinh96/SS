import moment from 'moment';
import { getFilters } from './filters';
import { sortNotes, getNotes } from './note';

// Generate the DOM structure for a note
const generateNoteDOM = note => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');
    // const button = document.createElement('button');
    // // set up the remove note button
    // button.textContent = 'x';
    // noteEl.appendChild(button);
    // button.addEventListener('click', (e) => {
    //     removeNote(note.id);
    //     savedNotes(notes)
    //     renderNotes(notes, filters);
    // })
    // set up the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    }
    else {
        textEl.textContent = 'Unnamed note';
    }
    // the setAttribute sets the value on the left to whatever it is on the right
    // so in this case, we're setting the 'a' element to have a href value that directs to that
    // note.html file
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);
    // set up the link
    noteEl.setAttribute(`href`, `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')
    // set up status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl;
}
// Render application notes 
// our function allows us to filter/find notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy);
    // we're returning the notes.title that matches wat the user inputs on the webpage
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    // This allows us to remove the notes that do not match the one the user is searching for
    // we want to use a div since if we use body, we would clear everything 
    notesEl.innerHTML = '';
    // this creates a new p tag for the ones the user searches for

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const noteEl = generateNoteDOM(note)
            // we're adding the div element since 
            notesEl.appendChild(noteEl);
        })
    }
    else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage);
    }
}
const initializedEditPage = noteId => {
    const titleElement = document.querySelector('#note-title');
    const bodyElement = document.querySelector('#note-body');
    const dateElement = document.querySelector('#last-edited');
    const notes = getNotes();
    const note = notes.find((note) => note.id === noteId)
    if (!note) location.assign('/index.html')
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);

}
// generate the last edited message
const generateLastEdited = timestamp => {
    return `Last edited ${moment(timestamp).fromNow()}`
}
export { generateNoteDOM, renderNotes, generateLastEdited, initializedEditPage }