import { Client } from 'discord.js';

declare module 'diskord-bot' {

    export class DiscordBot extends Client {
        public constructor(owners: string | string[], options?: ClientOptions)
        // properties
        public owners: string | string[];
        // functions
        public isOwner(userID: string): boolean;
    }
}