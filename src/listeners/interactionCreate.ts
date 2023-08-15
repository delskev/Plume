import { CommandInteraction, Client, Interaction, BaseInteraction, Events } from "discord.js";
import Commands from "../commandHandler";


const InteractionCreate = (client: Client) => {
    console.log("InteractionCreate Handler")
    client.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if ( interaction.isCommand()) {
            console.log("This is my time")
            await handleSlashCommand(client, interaction);
        }else {
            console.log("not a interaction.isContextMenuCommand()")
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    console.log("I'm here")
    if (!slashCommand) {
        interaction.followUp({ content: "An error has occurred" });
        return;
    }

    await interaction.deferReply();
    slashCommand.run(client, interaction);
}; 

export default InteractionCreate;