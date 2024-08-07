// import TelegramBot from "node-telegram-bot-api";
const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();



const token = process.env.BOT_TOKEN; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

const main = async (req) => {
    const { path } = req;


    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const messageText = msg.text;

        if (path ==="start"){

            
            if (messageText === '/start') {
                bot.sendMessage(chatId, 'Welcome to the bot!');
            }
        }
      });

   

};

main()