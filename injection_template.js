var styles = document.createElement('style');
styles.innerHTML = `ADD CSS HERE`;
document.head.appendChild(styles);

chatBotBody = document.createElement('div');
chatBotBody.innerHTML = `ADD HTML HERE`
document.body.appendChild(chatBotBody);

var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.onload = function () {
    //ADD JQUERY/JAVASCRIPT HERE
}
document.head.appendChild(script);