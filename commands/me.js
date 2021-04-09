const discord = require('discord.js');
module.exports = {
    name:"me",
    description:"Returns user Info",
    syntax:"!me",
    execute(message, args){
        //message.author.send("Name: "+ message.author.username + "\nID:" + message.author.id + "\n"+ message.author.displayAvatarURL());

        resposneMess = new discord.MessageEmbed()
                .setTitle(message.author.username)
                .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
                .setColor(0x4400fe)
                .addFields(
                    {name:'ID', value: message.author.id},
                    {name:'Tag:', value: message.author.tag},
                    )
                    if(message.channel.type != "dm") {
                        //console.log("Hello")
                        //console.log(message.member.roles.cache)
                        roles = message.member.roles.cache.map( r => r.name).slice(0,-1)
                        console.log(roles)
                        resposneMess.addField('Roles:', roles.toString())
                    }
            //console.log("hello2");
            message.author.send(resposneMess);
    },
};