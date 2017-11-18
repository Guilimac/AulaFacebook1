module.exports = {
    reply: function(status, chat, bot, message) {
        console.log(status);
        if (chat.senderId === '1524114757667974') {
            bot.sendText({
                id: chat.senderId,
                text: 'oi Marcio'
            });
        }
        bot.sendText({
            id: chat.senderId,
            text: message.text
        });
    }
};