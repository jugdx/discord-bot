const { Test } = require('tslint');
const { DiscordBot } = require('../../src/index');

const owner = "host@1234";

class TestDiscordBot extends DiscordBot {
    constructor() {
        super(owner);
    }
}

module.exports = TestDiscordBot;