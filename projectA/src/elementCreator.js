import moment from 'moment';
import { noteSorter, noteGetter } from './note';

// Generate the DOM structure for a note
const generateNoteDOM = note => {
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');

    // sets the note's title as we add it
    if (note.title.length > 0) textEl.textContent = note.title;
    else textEl.textContent = 'Unnamed note';

    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);
    noteEl.setAttribute(`href`, `/edit.html#${note.id}`);
    statusEl.textContent = generateLastEdited(note.updatedAt);
    statusEl.classList.add('list-item__subtitle');
    noteEl.appendChild(statusEl);
    return noteEl;
}

// Renders our notes by creating them and filtering/finding them 
const noteRender = () => {
    const notesEl = document.querySelector('#notes');
    const filters = getFilter();
    const notes = noteSorter(filters.sortBy);
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    notesEl.innerHTML = '';
    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const noteEl = generateNoteDOM(note);
            notesEl.appendChild(noteEl)
        })
    }
    else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message');
        notesEl.appendChild(emptyMessage);
    }
}

// generate the last edited message 
const generateLastEdited = timeStamp => {
    return `Last edited ${moment(timeStamp).fromNow()}`;
}

// redirect to our index.html if there is no note
const initializeEditPage = noteId => {
    const titleElement = document.querySelector('#note-title');
    const bodyElement = document.querySelector('#note-body');
    const dateElement = document.querySelector('#last-edited');
    const notes = noteGetter();
    const note = notes.find((note) => note.id === noteId);
    if (!note) location.assign('/index.html');
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
}

export { generateNoteDOM, noteRender, generateLastEdited, initializeEditPage }
