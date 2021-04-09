module.exports = {
    name:"ping",
    description:"Returns Pong",
    syntax:"!ping",
    execute(message, args){
        message.channel.send("Pong");
    },
};