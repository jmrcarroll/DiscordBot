const discord = require('discord.js');
const dotenv = require("dotenv");
const { format } = require('path');
const { resourceLimits } = require('worker_threads');
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
    if(message.channel.type == "text"){
        console.log(message.author.username + " in " + message.guild.name+" #"+ message.channel.name + ": " + message.cleanContent)
    } else if(message.channel.type == "dm") {
        console.log(message.author.username + ": " + message.cleanContent)
    }

    if (message.content.startsWith(prefix) && !message.author.bot){
        args = message.content.slice(prefix.length).trim().split(/ +/);
        cmd = args.shift().toLowerCase()
        if (message.channel.type == "text"){
            switch(cmd.toLowerCase()){
    
                case "ping": message.channel.send("Pong"); break;
                case "server": message.channel.send(message.guild.name); break;
                case "channel": message.channel.send("#" + message.channel.name); break;
                case "me": message.author.send("Name: "+ message.author.username + "\nID:" + message.author.id + "\n"+ message.author.displayAvatarURL()); break;
                case "insult": message.reply("You're a cunt!!"); break;
                case "avatar": message.reply(avatar(message)); break;
                default: message.channel.send("Unknown command: " + cmd); break;
            }
        }else if(message.channel.type == "dm"){
            cmd = message.content.substr((prefix.length));
            switch(cmd.toLowerCase()){
    
                case "ping": message.channel.send("Pong"); break;
                case "me": message.author.send("Name: "+ message.author.username + "\nID:" + message.author.id + "\n"+ message.author.displayAvatarURL()); break;
                case "insult": message.reply("You're a cunt!!"); break;
                case "avatar": message.reply(avatar(message)); break;
                default: message.channel.send("Unknown command: " + cmd); break;
            }
        }

    }
});
client.login(process.env.token);

function avatar(message){
    result =message.mentions.users.map(user=>{
        return user.username + " Avatar: " + user.displayAvatarURL({format: "png",dynamic: true}) +"\n"
    })
    

    return result;
}