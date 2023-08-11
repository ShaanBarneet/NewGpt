// Function to handle sending a message

const response = ['Hi how are you', 'Hi there I am Barneet', 'Hey wassup','Yo!','Wassup ma man','How you doin?']


var num = Math.floor(Math.random() * (5));

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    const reply = response[num];
    if (message !== '') {
        const chatMessages = document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const loading = document.querySelector('.chat-messages');
        const loader = document.createElement('div');
        loader.classList.add('loader');
        chatMessages.appendChild(loader);
        loading.scrollTop = loading.scrollHeight;
  
        setTimeout(function () {
            chatMessages.removeChild(loader);
            const chatResponse = document.querySelector('.chat-messages');
            const messageResponse = document.createElement('div');
            messageResponse.classList.add('message');
            messageResponse.textContent = reply;
            chatMessages.appendChild(messageResponse);
            chatResponse.scrollTop = chatResponse.scrollHeight;
        }, 5000);

    }
  }
  
  // Event listener
  document.getElementById('send-button').addEventListener('click', sendMessage);
  document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });