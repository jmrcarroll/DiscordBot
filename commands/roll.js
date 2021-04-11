
module.exports = {
    name:"roll",
    description:"Rolls the specified number of the specified sided dice",
    syntax:"!roll {*Optional:*{Number of dice}d{Number of Sides}} {*Optional:* Modifier(Positive, negitive or Zero)} {*optional*: Descriptor}",
    execute(message, args){
        console.log("Hello?")
        mRes = "";
        var res;
        console.log(args.length);
        if(args.length < 1){
            message.reply("🎲 You rolled 1d6 and got: "+ (Math.floor(Math.random()*6)+1) + " 🎲");
        }else{
            Dice = args[0].toLowerCase().split('d');
            console.log(Dice)
            console.log(Dice[0])
            console.log(Dice[1])
            numDice = parseInt(Dice[0])
            numSide = parseInt(Dice[1])
            console.log(numDice<10000)
            console.log(numSide<10000)
            if(numDice <10000 && numSide<10000){
                res =0;
                for (i = 0; i < numDice; i++){
                    rand = (Math.floor(Math.random()*numSide)+1);
                    //console.log(rand);
                    res = res + rand;
                }
            }else{
                mRes = "Sides and/or number os dice over the limit of 10,000"
                console.log(mRes)
            }
            console.log(mRes)
            modifier = 0;
            if(args.length > 1){
                modifier = parseInt(args[1]);
            }
            console.log(mRes)
            res = res + modifier;
            if (mRes == ""){
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
            }
            
            message.reply(mRes);
        }
    },
};