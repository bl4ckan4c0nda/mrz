const TeleBot = require("telebot")

//instantiate Telebot with our token got in the BtFather
const bot = new TeleBot({
    token: "1649780136:AAHwSzattqGb-HI4bkwZmJUe6UsUiHHk0qs"
})

//out command
bot.mod('text', (data) => {
    let msg = data.message;
    msg.text = `📢 ${ msg.text }`;
    return data;
});

//start polling
bot.start()

