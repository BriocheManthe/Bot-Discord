client.on('message', message => {
    if(message.content === "Bonjour")
    message.reply("Salut")
});
