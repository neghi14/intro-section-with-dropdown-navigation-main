const navPopup = document.querySelector('#nav-bar');



const features = document.querySelector('#features');

features.addEventListener('click', () => {
    const featuresPopup = document.querySelector('#features ul');

    featuresPopup.classList.toggle('nav-popup');
});

const company = document.querySelector('#company');

company.addEventListener('click', () => {
    const companyPopup = document.querySelector('#company ul');

    companyPopup.classList.toggle('nav-popup');
});

const drawer = document.querySelector('.drawer-img img');

drawer.addEventListener('click', () => {
    navPopup.classList.add('hidden')
});

const openNav = document.querySelector('#open-nav-btn');

openNav.addEventListener('click', () => {
    
    navPopup.classList.remove('hidden');
});

