let chat = 'Não obrigado, tchau';
//let chat = 'Olá, pode me ajudar?'
console.log(chat);
if (chat.toLowerCase().includes('olá')){
    console.log('Olá, seja bem vindo ao seu assistente virtual!');
}
if (chat.includes('tchau')){
    console.log('Até mais!')
}
