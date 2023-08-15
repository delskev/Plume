import { Client, Events } from "discord.js";
import Commands from "../commandHandler";



const Ready = (client: Client) => {
    client.on(Events.ClientReady, async () => {
        if (!client.user || !client.application) return ;

        await client.application.commands.set(Commands);

        console.log(`${client.user.username} is online`);
    })
}

export default Ready;