'use strict';

const echo = require('./commands/echo');
const ping = require('./commands/ping');
const id = require('./commands/id');
const start = require('./commands/start');
const odontodevs = require('./commands/odontodevs');
const help = require('./commands/help');

module.exports = {
    'echo': echo,
    'ping': ping,
    'id': id,
    'start': start,
    'odontodevs': odontodevs,
    'help': help
}