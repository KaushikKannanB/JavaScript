const chatwindow = document.getElementById("chat");
const text = document.getElementById("msg");
const send = document.getElementById("send");

function addMessage(sender,message){
    const ele = document.createElement("div");
    const time = new Date().toLocaleTimeString();

    ele.innerHTML = `<strong>${sender}:</strong> ${message} <small>${time}</small>`;
    ele.classList.add("show");
    chatwindow.appendChild(ele);
    chatwindow.scrollTop = chatwindow.scrollHeight;

}
function botReply(){
    const responses = [
        'Oh',
        'Meh',
        'Dumb',
        'OMG',
        'LOL',
        'ROFL'
    ];
    const randomreply = responses[Math.floor(Math.random()*responses.length)];
    setTimeout(()=>{
        addMessage('bot', randomreply);
    },1000);
}
send.addEventListener('click',()=>{
    const usermsg = text.value.trim();
    if(usermsg!==''){
        addMessage('user', usermsg);
        text.value = '';
        botReply();
    }
})