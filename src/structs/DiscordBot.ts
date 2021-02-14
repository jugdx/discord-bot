import { Client, ClientOptions, Intents } from 'discord.js';

export class DiscordBot extends Client {

    public owners: string | string[]

    public constructor(owners: string | string[], options?: ClientOptions) {
        super(options ?? {
            messageCacheLifetime: 180,
            messageSweepInterval: 360,
            allowedMentions: {
                parse: ['users', 'roles']
            },
            retryLimit: 3,
            ws: {
                intents: Intents.ALL
            }
        });
        this.owners = owners;
    }

    public isOwner(userID: string): boolean {
        let resolvedID = this.users.resolveID(userID);
        
        if (!resolvedID) return false;

        return Array.isArray(this.owners)
            ? this.owners.includes(resolvedID)
            : this.owners == resolvedID;
    }
}