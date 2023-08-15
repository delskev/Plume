import { Client, CommandInteraction, CacheType, ApplicationCommandType } from "discord.js";
import Command from "src/command";




const Hello: Command =  {
    name: "hello",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

export default Hello;