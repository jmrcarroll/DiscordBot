const discord = require('discord.js');
const dotenv = require("dotenv");
const client = new discord.Client();
const config = require('./config.json')
const prefix = config.prefix
dotenv.config()
//console.log(process.env.token);
console.log("||UNNAMED BOT STARTING||");


client.once('ready', ()=>{
    console.log('UNNAMED BOT READY! BEEP BOOP MOTHERFUCKERS!!');
});

client.on('message', message=>{
    console.log(message.author.username + " in " + message.guild.name+" #"+ message.channel.name + ":\t" + message.content)
    if (message.content.startsWith(prefix) && !message.author.bot){
        cmd = message.content.substr((prefix.length));
        switch(cmd.toLowerCase()){

            case "ping": message.channel.send("Pong"); break;
            case "server": message.channel.send(message.guild.name); break;
            case "channel": message.channel.send("#" + message.channel.name); break;
            default: message.channel.send("Unknown command: "+ cmd); break;
        }
    }
});
client.login(process.env.token);