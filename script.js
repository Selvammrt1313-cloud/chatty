async function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value;

let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += `<div class="user">You: ${message}</div>`;

input.value="";

let response = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
});

let data = await response.json();

chatbox.innerHTML += `<div class="bot">Bot: ${data.reply}</div>`;

chatbox.scrollTop = chatbox.scrollHeight;

}