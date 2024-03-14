document.getElementById('send-button').addEventListener('click', () => {
    const inputField = document.getElementById('chat-input');
    const userInput = inputField.value;
    
    // Add the user message to the chat box
    // In a real application, you'd also send this to the server
    if (userInput.trim()) {
        addMessageToChat('user', userInput);
        inputField.value = ''; // Clear the input field
        
        // Get the bot response
        getBotResponse(userInput);
    }
});

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    
    const avatar = document.createElement('img');
    avatar.src = sender === 'user' ? 'C:\Users\geeth\Downloads\humanavathar.jpg' : 'C:\Users\geeth\Downloads\Robot.jpg';
    avatar.classList.add('avatar');
    
    const messageContent = document.createElement('p');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;
    
    messageElement.appendChild(avatar);
    messageElement.appendChild(messageContent);
    
    chatBox.appendChild(messageElement);
}

function getBotResponse(userInput) {
    // Placeholder for an AJAX request to get the bot's response
    // For now, we'll just mimic a bot response after a delay
    setTimeout(() => {
        addMessageToChat('bot', 'This is a placeholder response!');
    }, 1000);
}
