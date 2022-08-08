// Get input element
let filterInput = document.querySelector('.contacts__search');

// Add event listener
filterInput.addEventListener('keyup', filterNames)


function filterNames(event) {
    let inputValue = event.target.value.toLowerCase();

    // Node List
    let contactItems = document.querySelectorAll('.collection__item');
    console.log(contactItems);

    Array.from(contactItems).forEach(function(item) {
        let contactName = item.firstChild.textContent;
        if(contactName.toLowerCase().indexOf(inputValue) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none"
        }
    });
}



