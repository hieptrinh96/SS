import { v4 as uuidv4 } from 'uuid'
import moment from 'moment';
let notes = [];
// read exising notes from localStorage
const loadNotes = () => {
    // check for existing saved data
    // our variable holds the results of using getItem to 'see' if there are any data with the string notes
    const notesJSON = localStorage.getItem('notes');
    // then we can set a condition, if our notesJSON contains a value, then we want to convert that value into a string and set our notes array to it
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return [];
    }
}
// save the notes to local storage
const savedNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}
// expose notes from module
const getNotes = () => notes;
const createNotes = () => {
    const id = uuidv4();
    const timeStamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updateAt: timeStamp
    })
    savedNotes();
    return id;
}
// remove a note from the list
const removeNote = id => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
        savedNotes();
    }
}
const sortNotes = sortBy => {
    if (sortBy === 'byEdited') return notes.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) return -1;
        else if (a.updatedAt < b.updatedAt) return 1;
        else return 0;
    })
    else if (sortBy === 'byCreated') return notes.sort((a, b) => {
        if (a.createdAt > b.createdAt) return -1;
        else if (a.createdAt < b.createdAt) return 1;
        else return 0;
    })
    else if (sortBy === 'alphabetical') return notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        else return 0;
    })
    else return notes;
}
const updateNotes = (id, updates) => {
    const note = notes.find((note) => note.id === id)
    if (!note) return;
    if (typeof updates.title === 'string') {
        note.title = updates.title;
        note.updatedAt = moment().valueOf()
    }
    if (typeof updates.body === 'string') {
        note.body = updates.body;
        note.updatedAt = moment().valueOf();
    }
    savedNotes();
    return note;
}
notes = loadNotes();
export { getNotes, createNotes, removeNote, sortNotes, updateNotes }