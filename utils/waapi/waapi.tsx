export const iniciarChatWhatsApp = () => {
    const numero = '5531999369653'; // Número de telefone no formato internacional
    const mensagem = 'Dr. Italo, estou precisando de um atendimento jurídico.'; // Mensagem padrão
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}