exports.run = async (client, message, args) => {
  if (!client.config.developers.includes(message.author.id))
    return message.reply("Only **Developer** can use this command");
  try {
    let msg = await message.channel.send("Please wait...");
    console.log("Restarting done!");
    client.destroy();
    process.exit();
  } catch {}
};
exports.help = {
  name: "restart",
  description: "",
  usage: "restart",
  example: "restart"
};

exports.conf = {
  aliases: ["reboot"],
  cooldown: 1
};
