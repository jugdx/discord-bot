import { Client } from 'discord.js';

declare module 'diskord-bot' {

    export type DiskordBotOwner = string | string[];
    export interface DiskordBotOptions {
        owners?: DiskordBotOwner;
    }
    
    export class DiskordBot extends Client {
        public readonly owners: DiskordBotOwner;
        public constructor(options: DiskordBotOptions = {}, clientOptions?: ClientOptions);
        public isOwner(userID: string): boolean;
    }
}