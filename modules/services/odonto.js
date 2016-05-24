'use strict';

const stickers = [
    'BQADBAADMgEAAl6A9AWiXNcdh4N2fgI',
    'BQADBAADzQADXoD0BfaPN-SRlpBYAg',
    'BQADBAADxQADXoD0Be6MWaqIBanrAg',
    'BQADBAADAQEAAl6A9AVrEFjvEfTbRwI',
    'BQADBAADOQEAAl6A9AWLW7oQoiHXdAI',
    'BQADBAADBwEAAl6A9AXuD8xAc5avLwI',
    'BQADBAADxwADXoD0BaTJK9_y3lrtAg',
    'BQADBAADyQADXoD0BYyFKrC9hFpcAg',
    'BQADBAADywADXoD0BaJ-5YWTuZxTAg',
    'BQADBAADzwADXoD0BactihrL_9LKAg',
    'BQADBAAD6wADXoD0Bbi4Fg2kp0fUAg'
]

const execute = (bot, msg) => {
    const sticker = stickers[Math.floor(Math.random() * stickers.length)];
    bot.sendMessage(msg.chat.id, "Odonto System", {'reply_to_message_id': msg.message_id});
    bot.sendSticker(msg.chat.id, sticker, {'reply_to_message_id': msg.message_id});
}

module.exports = {
    execute: execute
}