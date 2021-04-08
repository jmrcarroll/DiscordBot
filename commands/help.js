module.exports = {
    name:"help",
    description:"Provides help to the user",
    syntax:"!help",
    execute(message, args){
        message.author.send("Name: "+ message.author.username + "\nID:" + message.author.id + "\n"+ message.author.displayAvatarURL());
    },
};