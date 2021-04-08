module.exports = {
    name:"insult",
    description:"Returns avatar pf requested user",
    execute(message, args){
        console.log(message.mentions)

        if(message.mentions.users.size){
            result = message.mentions.users.map(user=>{
                return "<@" + user + ">, You're a cunt!\n"
            })

            message.channel.send(result);
        } else{

            message.reply("You're a cunt!")
        }

    },
};