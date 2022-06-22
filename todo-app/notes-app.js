const p = document.querySelectorAll('p');
p.forEach(ps => {
    if (ps.textContent.includes('the')) ps.remove();
})