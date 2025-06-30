const path = require('path');
const express = require('express');
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const PORT = 4440;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.get('/chat',(req,res)=>{
    res.render('chat');
})

app.get('/',(req,res)=>{
    res.send("hello");
})

const io = new Server(httpServer);
io.on("connection", (socket) => {
    // console.log('Connection requested by a client',socket.id);

    socket.emit('Welcome', { msg: 'Welcome to the chat app!' });

    socket.on('thankyou',(text,cb)=>{
        console.log(text);
        cb({status:'ok'})
    })

    socket.on('chat',(msg,cb)=>{
        console.log(msg);
        cb({
            status:'bye',
        })
    })
});

httpServer.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
})
