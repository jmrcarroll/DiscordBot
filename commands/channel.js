module.exports = {
    name:"channel",
    description:"Returns Channel Name",
    execute(message, args){
        message.channel.send("Channel Name: " + message.channel.name);
    },
};