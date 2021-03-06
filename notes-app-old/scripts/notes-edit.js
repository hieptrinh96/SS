'use strict'
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#butt')
const dateElement = document.querySelector('#last-edited')
// this gives us part of the string 
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => {
    return note.id === noteId;
})
if (note === undefined)location.assign('/index.html');

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt)
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    savedNotes(notes);
})
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    savedNotes(notes);
})
removeElement.addEventListener('click', (e) => {
    removeNote(note.id);
    savedNotes(notes);
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.value)
        note = notes.find(note => {
            return note.id === noteId;
        })
        if (note === undefined) location.assign('/index.html');

        titleElement.value = note.title;
        bodyElement.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})
