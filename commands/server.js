module.exports = {
    name:"server",
    description:"Returns Server name",
    execute(message, args){
        message.channel.send("Server Name: " + message.guild.name);
    },
};