// DOM - docuument object model
// document is an object
// Query and remove takes the first match it finds
// const p = document.querySelector('p')
// p.remove();

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


// Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(p => {
    p.textContent = '***********'
    // console.log(p.textContent)
    // p.remove();
})