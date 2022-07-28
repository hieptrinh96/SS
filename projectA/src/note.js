import { v4 as uuidv4 } from 'uuid'
import moment from 'moment';

let notes = [];
// retrieving data from local storage
const noteLoader = () => {
    const noteJSON = localStorage.getItem('notes');
    return noteJSON ? JSON.parse(noteJSON) : [];
}

// assign our notes to be used in another module
const noteGetter = () => notes;
// dynamically adding notes created from user 
const noteCreator = () => {
    // this gives us the unique id identifier along with the time the note is created
    const id = uuidv4();
    const timeStamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    noteSaved();
    return id;
}
// Saves the notes created to local storage
const noteSaved = () => localStorage.setItem('notes', JSON.stringify(notes));

// removes unwanted notes
const noteRemover = id => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) notes.splice(noteIndex, 1);
    noteSaved();
}

// sort notes 
const noteSorter = sortBy => {
    if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) return -1;
            else if (a.createdAt < b.createdAt) return 1;
            else return 0;
        })
    }
    if (sortBy === 'alphabetically') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            else return 0;
        })
    }
    else return notes;
}

// making changes to notes 
const noteUpdater = (id, updates) => {
    const note = notes.find((note) => note.id === id);
    if (!note) return;
    if (typeof updates.title === 'string') {
        note.title = updates.title;
        note.updatedAt = moment().valueOf();
    }
    if (typeof updates.body === 'string') {
        note.body = updates.body;
        notes.updatedAt = moment().valueOf();
    }
    noteSaved();
    return note;
}

// re-assign our notes array to all the notes we retrieved from local storage
notes = noteLoader();

// export our functions 
export { noteGetter, noteCreator, noteRemover, noteSorter, noteUpdater }