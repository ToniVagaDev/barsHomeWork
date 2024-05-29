document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
        document.querySelector('.indicator').innerHTML = `<h1 id="ghostText">${event.target.textContent}</h1>`
    }
});