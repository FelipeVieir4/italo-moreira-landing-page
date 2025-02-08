export const iniciarChatWhatsApp = () => {
    const numero = '5531999369653'; // Número de telefone no formato internacional
    const mensagem = 'Olá, teste API de chat do WhatApp!';
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}