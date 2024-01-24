const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function toggleDropdown() {
    var dropdownContent = document.querySelector('#navbar .dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function (event) {
    var dropdown = document.querySelector('#navbar .dropdown');
    var dropdownContent = document.querySelector('#navbar .dropdown-content');

    if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
    }
});