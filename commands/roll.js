
module.exports = {
    name:"roll",
    description:"Rolls the specified number of the specified sided dice",
    execute(message, args){
        console.log(args.length);
        if(args.length < 1){
            message.reply("🎲 You rolled 1d6 and got: "+ (Math.floor(Math.random()*6)+1) + " 🎲");
        }else{
            Dice = args[0].toLowerCase().split('d');
            console.log(Dice)
            res =0;
            for (i = 0; i < Number(Dice[0]); i++){
                rand = (Math.floor(Math.random()*Number(Dice[1]))+1);
                console.log(rand);
                res = res + rand;
            }
            modifier = 0;
            if(args.length > 1){
                modifier = Number(args[1]);
            }
            res = res + modifier;
            mRes = "🎲 You rolled " + Dice[0] + "d" + Dice[1]+" and got: "+ res + " 🎲"
            console.log(mRes)
            console.log(args)
            
            if(args.length > 2 ){
                mRes = mRes +" Roll was for: "
                console.log(mRes)
                for (i = 2; i<args.length;i++){
                    mRes = mRes + " " + args[i]  
                }
            }
            message.reply(mRes);
        }
    },
};