import { initializeEditPage, generateLastEdited } from './elementCreator';
import { noteUpdater, noteRemover } from './note';

// creating variables to work with
const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');
const noteId = location.hash.substring(1);

// calling our initializeEditPage
initializeEditPage();

// adding event listeners
titleElement.addEventListener('input', (e) => {
    const note = noteUpdater(noteId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
})

bodyElement.addEventListener('input', (e) => {
    const note = noteUpdater(noteId, {
        body: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
})

removeElement.addEventListener('click', (e) => {
    noteRemover(noteId);
    location.assign('/index.html');
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') initializeEditPage(noteId)
})