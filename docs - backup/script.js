function iniciarChatWhatsApp() {
    const numero = '5531999369653'; // Número de telefone no formato internacional
    const mensagem = 'Olá, teste API de chat do WhatApp!';
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

function handleHamburguerMenu() {
    const hamburguerIcon = '&#9776;';
    const closeIcon = '&times;';
    const menuToggleValue = `&#${document.querySelector('.navbar-toggle-icon').innerHTML.charCodeAt(0)};`;
    const menuToggle = document.querySelector('.navbar-toggle-icon');
    const navbar = document.querySelector('.navbar-menu');

    if (window.innerWidth > 1200) { return } //evita que o menu seja deslocado quando o menu hamburque estã desativado

    switch (menuToggleValue) {
        case hamburguerIcon:
            menuToggle.innerHTML = closeIcon;
            navbar.style.transform = 'translateX(0%)';
            break;

        case closeIcon:
            menuToggle.innerHTML = hamburguerIcon;
            navbar.style.transform = 'translateX(100%)';
            break;

        default:
            menuToggle.innerHTML = hamburguerIcon;
            navbar.style.transform = 'translateX(100%)';
            break;
    }
}


window.addEventListener('resize', function () {
    const navbar = document.querySelector('.navbar-menu');
    const hamburguerIcon = '&#9776;';
    const menuToggle = document.querySelector('.navbar-toggle-icon');


    if (window.innerWidth > 1200) {
        menuToggle.innerHTML = hamburguerIcon;
        navbar.style.transform = 'translateX(0%)';
    } else {
        menuToggle.innerHTML = hamburguerIcon;
        navbar.style.transform = 'translateX(100%)';
    }
})