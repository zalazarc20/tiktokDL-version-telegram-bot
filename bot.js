import TelegramBot from "node-telegram-bot-api";
import { getUrl } from "./src/getUrl.js";
import { validateDomain } from "./src/validateDomain.js";

const token = 'YOUR-TOKEN-BOT';
const bot = new TelegramBot(token, {polling: true});

// start message
bot.onText(/^\/start/, (msg) => {

    const chatId = msg.chat.id;
    const nameUser = msg.from.first_name;

    bot.sendMessage(chatId, `Bienvenido ${nameUser}, antes de empezar use el comando /lang para cambiar el idioma, o si quieres puedes mandarme un enlace de tiktok`);
});

bot.onText(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:((www|[a-zA-Z0-9]+)\.))?([^:\/\n\?\=]+)/, async (msg, math) => {
    let chatId = msg.chat.id;
    let url = math.input;
    
    if(validateDomain(url)){
        getUrl(url, link => bot.sendVideo(chatId, link));
    }else{
        bot.sendMessage(chatId, 'Lo siento, no mandaste una url de tiktok');
    }
})

// obteniendo errores
bot.on('polling_error', function(error){
    console.log(error);
});