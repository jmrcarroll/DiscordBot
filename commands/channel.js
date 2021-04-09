module.exports = {
    name:"channel",
    description:"Returns Channel Name",
    execute(message, args){
        
        if(message.channel.type != "dm"){
            message.channel.send("Channel Name: " + message.channel.name);
        } else{
            message.channel.send("You have not messaged me on a server");
        }
    },
};