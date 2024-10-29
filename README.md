# Chatbot Injector

This project provides a front-end chatbot interface that can be easily injected into any website for testing and quick prototyping. While it currently only displays a placeholder response, it can be integrated with a backend RAG service for full chatbot functionality in the future, but for now it only quaks!!.

## Usage

1. Open the target website.
2. Open the browser console.
3. Paste and run the code below:

   ```javascript
   fetch('https://api.github.com/repos/thisisadityapatel/chatbot-injector/contents/injector.js')
       .then(response => response.json())
       .then(data => eval(atob(data.content)))
       .catch(error => console.error("Injection failed:", error));
