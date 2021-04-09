module.exports = {
    name:"server",
    description:"Returns Server name",
    execute(message, args){
        if(message.t)
        if(message.channel.type != "dm"){
            message.channel.send("Server Name: " + message.guild.name);
        } else{
            message.channel.send("You have not messaged me on a server");
        }
        

    },
};