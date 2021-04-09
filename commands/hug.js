module.exports = {
    name:"hug",
    description:"Hugs the requested user",
    syntax:"!hug {*optional* Mention user}",
    execute(message, args){
        console.log(message.mentions)

        if(message.mentions.users.size){
            result = message.mentions.users.map(user=>{
                return "Wraps <@" + user + "> in a loving embrace"
            })

            message.channel.send(result);
        } else{
            user = message.author
            message.reply("Wraps <@" + user + "> in a loving embrace")
        }

    },
};
