const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Ticket alarm botu aktif!");
});

// Örnek alarm komutu
bot.onText(/\/alarm (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];

  setTimeout(() => {
    bot.sendMessage(chatId, "⏰ ALARM: " + text);
  }, 5000);
});
