const logoBtn = document.getElementById('logoBtn');
const megaMenu = document.getElementById('megaMenu');

logoBtn.addEventListener('click', function () {
    megaMenu.classList.toggle('active');
});