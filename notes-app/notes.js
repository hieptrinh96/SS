// DOM - docuument object model
// document is an object
// Query and remove takes the first match it finds
// const p = document.querySelector('p')
// p.remove();

// Query all and remove
const ps = document.querySelectorAll('p');
ps.forEach(p => {
    p.textContent = '***********'
    // console.log(p.textContent)
    // p.remove();
})