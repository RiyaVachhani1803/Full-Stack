const mongoose = require('mongoose');
const chat = require('./models/chat.js');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from : "sachin",
        to : "Priya",
        message : "hello",
        created_at : new Date()
    },
    {
        from : "rohit",
        to : "meera",  
        message : "send me notes for exam",
        created_at : new Date()
    },
    {
        from : "amit",
        to : "mohit",
        message : "need help with assignment",
        created_at : new Date()
    },
    {
        from : "riya",
        to : "hir",
        message : "lets go for a movie",
        created_at : new Date()
    },
    {
        from : "pal",
        to : "mohit",
        message : "teach me node js",
        created_at : new Date()
    }
];

chat.insertMany(allchats);
