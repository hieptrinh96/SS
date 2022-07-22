'use strict'


// remove a note from the list
// const removeNote = id => {
//     const noteIndex = notes.findIndex(note => {
//         return note.id === id
//     })
//     if (noteIndex > -1) notes.splice(noteIndex, 1);
// }

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
    noteEl.setAttribute(`href`, `/note.html#${note.id}`)
    noteEl.classList.add('list-item')
    // set up status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl;
}


// Render application notes 
// our function allows us to filter/find notes
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy);
    // we're returning the notes.title that matches wat the user inputs on the webpage
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    // This allows us to remove the notes that do not match the one the user is searching for
    // we want to use a div since if we use body, we would clear everything 
    notesEl.innerHTML = '';
    // this creates a new p tag for the ones the user searches for

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const noteEl = generateNoteDOM(note);
            // we're adding the div element since 
            notesEl.appendChild(noteEl);
        })
    }
    else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild( emptyMessage);
    }   
    }

// generate the last edited message
const generateLastEdited = timeStamp => {
    return `Last edited ${moment(timeStamp).fromNow()}`
}