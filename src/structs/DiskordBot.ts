import { Client, ClientOptions } from 'discord.js';


export type DiskordBotOwner = string | string[];
export interface DiskordBotOptions {
    owners?: DiskordBotOwner;
}

/**
 * The **DiskordBot** framework client.
 * @param {DiskordBotOptions} [options={}] - Options for the **DiskordBot** client.
 * @param {ClientOptions} [clientOptions] - Options for **discord.js** client.
 */
export class DiskordBot extends Client {

    public readonly owners: DiskordBotOwner;

    public constructor(options: DiskordBotOptions = {}, clientOptions?: ClientOptions) {
        super(clientOptions);
        this.owners = options.owners ?? [];
    }

    public isOwner(userID: string): boolean {
        let resolvedID = this.users.resolveID(userID);
        if (!resolvedID) return false;

        return Array.isArray(this.owners)
            ? this.owners.includes(resolvedID)
            : this.owners == resolvedID;
    }
}