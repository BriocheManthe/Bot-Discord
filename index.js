const Discord = require('discord.js');

var bot = new Discord.Client();

bot.login("process.env.TOKEN");

bot.on("ready", function() {

    bot.user.setGame("Support Nolimit");
    console.log("Le bot est connecté");
});

client.on('message', message => {
    if(message.content === "Bonjour")
    message.reply("Salut")
});






