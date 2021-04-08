module.exports = {
    name:"ping",
    description:"Returns Pong",
    execute(message, args){
        message.channel.send("Pong");
    },
};