const socket=io();

const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');
const chatbox = document.querySelector('#chatbox');
const chattingApp = document.querySelector('.chattingApp')
const userDetails= document.querySelector('.userDetails');

socket.on('Welcome',(msg)=>{
    console.log(msg.msg);

    socket.emit('thankyou',"Thanks from client",(res)=>{
        console.log(res.status);
    });
})

btn1.addEventListener('click',(ev)=>{
    console
   userDetails.classList.add('hide');
   chattingApp.classList.remove('hide');
})

btn.addEventListener('click',(ev)=>{
    // console.log(ev.target.value);
    socket.emit('chat',{
        msg:chatbox.value
    },(res)=>{
        console.log(res.status);
    })
})

chattingApp.classList.add('hide');
// const socket = io();

// socket.on('Welcome', (msg) => {
//     console.log(msg.msg);  // Should show: Welcome to the chat app!

//     socket.emit('thankyou', "Thanks from client", (res) => {
//         console.log(res.status);  // Should show: ok
//     });
// });
