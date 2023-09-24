var styles = document.createElement('style');
styles.innerHTML = `.circular-button {
    width: 60px;
    height: 60px; 
    background-color: #1E6BD8;
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed; 
    bottom: 30px; 
    right: 30px;
    cursor: pointer;
}
.d-none{
    display: none;
}
.chatbot-container {
    position: fixed;
    bottom: 30px; 
    right: 30px;
    width: 400px;  /*CONTAINER WIDTH*/
    background-color: #ffffff !important;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.chatbot-header {
    background-color: #1E6BD8;
    color: #ffffff;
    padding: 12px 20px 12px 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;
}
.close-button {
    cursor: pointer;
}
.chatbot-messages {
    height: 600px; /* HEIGHTVOF THE CONTAINER */
    overflow-y: scroll; /* Make it scrollable in Y direction */
    padding: 10px;
    display: flex;
    flex-direction: column-reverse; /* Stack messages from the bottom */
    font-size: 13px !important;
}
.chatbot-input {
    padding: 10px 10px 10px 10px;
}
.chatbot-input-container{
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 10px !important;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 40px !important;
    font-size: 13px !important;
}
.chatbot-input-container input {
    border: none;
    outline: none;
    flex-grow: 1;
}
.user-message-container{
    align-items: right;
}
.bot-message-container{
    align-items: left;
}
.messsage-component{
    width: 40px;
}
/* User message styles */
.user-message {
    align-self: flex-end; /* Align to the right */
    margin: 5px 0; /* Adjust margin between messages */
    max-width: 90%;
}
.user-message-container {
    background-color: #1E6BD8; /* Grey background */
    border-radius: 10px;
    padding: 10px;
    color: white !important;
}
/* Bot message styles */
.bot-message {
    align-self: flex-start; /* Align to the left */
    margin: 5px 0; /* Adjust margin between messages */
    max-width: 90%;
}
.bot-message-container {
    background-color: #f2f2f2 !important;
    border-radius: 10px;
    padding: 10px;
    color: black !important;
}
/* Send button styles */
.chatbot-send-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 10px; /* Adjust margin as needed */
}
/* Adjust the SVG icon size */
.chatbot-send-button svg {
    height: 30px;
    width: 30px;
    fill: #1e6bd8;
}
.chatBotPackage{
    z-index: 998;
    font-family: 'Open Sans', sans-serif;
}
.chatbot-time-container{
    text-align: center;
    color: #4d4d4d;
    font-size: 11px;
    margin: 5px;
}
.chatbot-close-confirmation-container{
    width: 400px; /*Confirmation WIDTH*/
    position: fixed;
    bottom: 30px; 
    right: 30px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f2f2 !important;
    height: 120px;
}
.chatbot-confirmation-blue-button{
    background-color: #1E6BD8 !important;
    color: white;
    border: none;
    width: 100%; /* Full width */
    padding: 14px;
    cursor: pointer;
    border-radius: 10px; /* 10px border radius */
    font-size: 15px;
    font-weight: 600;
}
.chatbot-confirmation-white-button{
    background-color: #f2f2f2 !important;
    color: black;
    border: none;
    width: 100%; /* Full width */
    padding: 14px;
    cursor: pointer;
    border-radius: 10px; /* 10px border radius */
    font-size: 15px;
    font-weight: 600;
}
.chatbot-dimmer{
    opacity: 0.3;
}`;
document.head.appendChild(styles);
chatBotBody = document.createElement('div');
chatBotBody.innerHTML = `<div class='chatBotPackage'>
    <div id='chatbot-popup-icon-button'>
        <div class='circular-button'>
            <svg fill='#ffffff' height='24px' width='24px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 60.00 60.00' xml:space='preserve' stroke='#ffffff' stroke-width='0.0006000000000000001'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z'></path> </g></svg>
        </div>
    </div>
    <div id='chatbot-popu-messages' class='d-none'>
        <!-- Chatbot container -->
        <div class='chatbot-container'>
            <!-- Header -->
            <div class='chatbot-header'>
                Helios AI Assistant
                <div>
                    <span id='chatbot-close-button' class='close-button' style='margin-right: 15px; font-size: 18px; font-weight: bold'>&#8722;</span>
                    <span id='chatbot-clear-chat-button' class='close-button'>&#10005;</span> <!-- Close button (an 'X' symbol) -->
                </div>
            </div>

            <!-- Chat messages area -->
            <div class='chatbot-messages' id="chatbot-messages-logs">
                <!-- Default Bot messages -->
                <div class='bot-message'>
                    <div class='bot-message-container'>
                        What can I help you with today?
                    </div>
                </div>
                <div class='bot-message'>
                    <div class='bot-message-container'>
                        Welcome to Helios!
                    </div>
                </div>
                <!-- Added this just cause it looks good lol-->
                <div class='chatbot-time-container'>
                    Today
                </div>
            </div>
            <!-- Input area -->
            <div class='chatbot-input'>
                <form id='chatbot-input-form'>
                    <div class='chatbot-input-container'>
                        <input type='text' id='chatbot-input-message-field' placeholder='Message...' style='background-color: white; color: black'/>
                        <button class='chatbot-send-button d-none' id='chatbot-submit-button'>
                            <svg height='30px' width='30px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M16.1391 2.95907L7.10914 5.95907C1.03914 7.98907 1.03914 11.2991 7.10914 13.3191L9.78914 14.2091L10.6791 16.8891C12.6991 22.9591 16.0191 22.9591 18.0391 16.8891L21.0491 7.86907C22.3891 3.81907 20.1891 1.60907 16.1391 2.95907ZM16.4591 8.33907L12.6591 12.1591C12.5091 12.3091 12.3191 12.3791 12.1291 12.3791C11.9391 12.3791 11.7491 12.3091 11.5991 12.1591C11.3091 11.8691 11.3091 11.3891 11.5991 11.0991L15.3991 7.27907C15.6891 6.98907 16.1691 6.98907 16.4591 7.27907C16.7491 7.56907 16.7491 8.04907 16.4591 8.33907Z' fill='#1e6bd8'></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class='chatbot-close-confirmation-container d-none' id="chatbot-close-confirmation-popup">
            <div style='margin: 20px'>
                <button class="chatbot-confirmation-blue-button" id="chatbot-end-conversation-chat-button">End Chat</button>
                <button class="chatbot-confirmation-white-button" id="chatbot-cancle-converstation-chat-button">Cancel</button>
            </div>
        </div>
    </div>
</div>`;
document.body.appendChild(chatBotBody);
var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.onload = function () {
     //function to toggle between button and chatbot
     $(document).ready(function(){
        //toggle button and content of chatBot
        const submitButton = $('#chatbot-submit-button');
        const closeButton = $('#chatbot-close-button');
        const clearChatButton = $('#chatbot-clear-chat-button');
        const inputField = $('#chatbot-input-message-field');
        const messageLogs = $('#chatbot-messages-logs');
        const confirmationPopup = $('#chatbot-close-confirmation-popup');
        const toggleChatBot = function(){
            let botButton = $('#chatbot-popup-icon-button');
            let botContent = $('#chatbot-popu-messages');

            if(botButton.hasClass('d-none')){
                botButton.removeClass('d-none');
            }else{
                botButton.addClass('d-none');
            }
            if(botContent.hasClass('d-none')){
                botContent.removeClass('d-none');
            }else{
                botContent.addClass('d-none');
            }
        }
        const createUserMessage = function(message){
            var msg = "<div class='user-message'><div class='user-message-container'>" + message + "</div></div>";
            return msg
        }
        const createBotMessage = function(message){
            var msg = "<div class='bot-message'><div class='bot-message-container'>" + message + "</div></div>";
            return msg
        }
        const generateChatbotAnswer = function(message){
            var output = "";
            var randomNumber = getRandomNumber();
            for(let i=0; i <=randomNumber;i++){
                output += " Quak";
            }
            return output;
        }
        const getRandomNumber = function(){
            return Math.floor(Math.random() * 4) + 1;
        }
        const mainGenerationHandler = function(){
            let userEnteredMessage = inputField.val().trim();
            if(userEnteredMessage.length != 0){
                messageLogs.prepend(createUserMessage(userEnteredMessage));
                let output = generateChatbotAnswer(userEnteredMessage);
                messageLogs.prepend(createBotMessage(output));
                inputField.val('');
                submitButton.addClass('d-none');
            }
        }

        $(document).on('click', '#chatbot-popup-icon-button', toggleChatBot);
        $(document).on('click', '#chatbot-close-button', toggleChatBot);
        $(document).on('keyup', '#chatbot-input-message-field', function(){
            if($(this).val().trim().length != 0){
                submitButton.removeClass('d-none');
            }
            else{
                submitButton.addClass('d-none');
            }
        });
        $(document).on('click', '#chatbot-submit-button', function(e){
            e.preventDefault();
            mainGenerationHandler();
        })
        $(document).on('submit', '#chatbot-input-form', function(e){
            e.preventDefault();
            mainGenerationHandler();
        })
        $(document).on('click', '#chatbot-end-conversation-chat-button', function(){
            toggleChatBot();
            messageLogs.html(`<div class='bot-message'>
                <div class='bot-message-container'>
                    What can I help you with today?
                </div>
            </div>
            <div class='bot-message'>
                <div class='bot-message-container'>
                    Welcome to Helios!
                </div>
            </div>
            <!-- Added this just cause it looks good lol-->
            <div class='chatbot-time-container'>
                Today
            </div>`);
            confirmationPopup.addClass('d-none');
            submitButton.addClass('d-none');
            inputField.val('');
            messageLogs.removeClass('chatbot-dimmer');
        })
        $(document).on('click', '#chatbot-cancle-converstation-chat-button', function(){
            confirmationPopup.addClass('d-none');
            messageLogs.removeClass('chatbot-dimmer');
        })
        $(document).on('click', '#chatbot-clear-chat-button', function(){
            confirmationPopup.removeClass('d-none');
            messageLogs.addClass('chatbot-dimmer');
        })
    })
}
document.head.appendChild(script);