module.exports = {
    name:"me",
    description:"Returns user Info",
    syntax:"!me",
    execute(message, args){
        message.author.send("Name: "+ message.author.username + "\nID:" + message.author.id + "\n"+ message.author.displayAvatarURL());
    },
};