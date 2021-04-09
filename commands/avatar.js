module.exports = {
    name:"avatar",
    description:"Returns avatar pf requested user",
    syntax:"!avatar {*optional* Mention user}",
    execute(message, args){
        if(message.mentions.users.size){
            result =message.mentions.users.map(user=>{
                return user.username + " Avatar: " + user.displayAvatarURL({format: "png",dynamic: true}) +"\n"
            })
            message.reply(result);
        } else{
            message.reply(message.author.displayAvatarURL({format: "png",dynamic: true}))
        }
    },
};