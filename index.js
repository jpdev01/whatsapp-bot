const axios = require('axios');


const token = require('./config').TOKEN;

//URL da api de whatsapp da Zenvia
const URL = 'https://api.zenvia.com/v2/channels/whatsapp/messages';

function Send() {
    const body = {
        from: 'rowan-trick', //seu senderId obtido no Passo 2
        to: '5547999087474', //numero que vai receber a mensagem
        contents: [
            {
                type: 'text',
                text: 'Hello world from Zenvia'
            },
            {
                type: 'text',
                text: 'This a second message!'
            },
        ]
    }

    try {
        const response = axios.post(URL, body, {
            headers: {
                'X-API-TOKEN': token,
                'Content-Type': 'application/json',
            },
        }).then(function(response) {
           console.log(response.status);
        });
    } catch (error) {
        console.log(error);

    }
}
Send();