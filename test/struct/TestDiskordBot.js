const { Test } = require('tslint');
const { DiscordBot } = require('../../src/index');
const { DiskordBot } = require('../../src/structs/DiskordBot');

const owner = "host@1234";

class TestDiskordBot extends DiskordBot {
    constructor() {
        super(owner);
    }
}

module.exports = TestDiskordBot;