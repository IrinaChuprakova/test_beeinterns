const sidebarButtons =  document.querySelectorAll('.sidebar__button');

sidebarButtons.forEach(function(button) {
    button.addEventListener('click', function(evt) {
        const parent = evt.target.parentElement.parentElement;
        const ul = parent.querySelector('.sidebar__submenu');
        ul.classList.toggle('sidebar__submenu_active')
    });
});