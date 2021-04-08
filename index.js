const discord = require('discord.js');
const dotenv = require("dotenv");
const client = new discord.Client();
dotenv.config()
//console.log(process.env.token);
console.log("||UNNAMED BOT STARTING||");


client.once('ready', ()=>{
    console.log('UNNAMED BOT READY! BEEP BOOP MOTHERFUCKERS!!');
});

client.on('message', message=>{
    console.log(message.author.username + " in " + message.guild.name+" #"+ message.channel.name + ":\t" + message.content)
    if (message.content == "!ping" && !message.author.bot){
        message.react("😂");
        message.channel.send("!ping");
    }
});
client.login(process.env.token);