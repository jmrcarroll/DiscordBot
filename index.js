const discord = require('discord.js');
const dotenv = require("dotenv");
const { format } = require('path');
const { resourceLimits } = require('worker_threads');
const client = new discord.Client();
const config = require('./config.json')
const prefix = config.prefix
const fs = require('fs');
client.commands = new discord.Collection();

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(file of cmdFiles){
    const command = require('./commands/'+file)
    client.commands.set(command.name, command)
}

dotenv.config()
//console.log(process.env.token);
console.log("||UNNAMED BOT STARTING||");


client.once('ready', ()=>{
    console.log('UNNAMED BOT READY! BEEP BOOP MOTHERFUCKERS!!');
    console.log(client.commands)
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
        if (!client.commands.has(cmd) && cmd != "help"){
            message.reply("No command: " + cmd);
            return;
        } else if (cmd == "help"){
            client.commands.map(command =>{
                resposneMess = new discord.MessageEmbed()
                .setTitle(command.name)
                .setAuthor(client.user.username, client.user.displayAvatarURL())
                .setDescription(`__Description__:\n${command.description}\n\n`)
                .setColor(0x4400fe)
                .addFields({name:'Syntax', value: command.syntax})
            message.author.send(resposneMess)
            });

            
        }else{
            try{
                client.commands.get(cmd).execute(message,args);
            }catch(error){
                message.reply("Unable to execute command")
            }
        }
    }
});
client.login(process.env.token);
