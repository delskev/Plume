import 'dotenv/config'; // use it trough process.env
import { Client, GatewayIntentBits, Events } from 'discord.js';
import Ready from './listeners/ready';
import InteractionCreate from './listeners/interactionCreate';


console.log("Bot is starting...");

const client = new Client({
    intents: []
});


Ready(client);
InteractionCreate(client);

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
