import { noteCreator } from "./note";
import { filterSetter, noteFilter } from "./filters";
import { noteRender } from "./elementCreator";

// call noteRender
noteRender()

// select the element we want to change
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = noteCreator();
    location.assign(`/edit.html#${id}`);
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filterSetter({
        searchText: e.target.value
    })
    noteRender();
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filterSetter({
        sortBy: e.target.value
    })
    noteRender();
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') noteRender();
})