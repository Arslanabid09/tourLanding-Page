const navMenu = document.getElementById('nav-menu');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtn1 = document.getElementById('toggle-btn1');

toggleBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');

    this.classList.toggle('fa-bars');
});

toggleBtn1.addEventListener('click', function() {
    navMenu.classList.remove('active');

    toggleBtn.classList.add('fa-bars');
});
