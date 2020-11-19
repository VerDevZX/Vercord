const Discord = require("discord.js");
const ms = require("ms");
exports.run = async (client, message, args) => {
  const msg = await message.channel.send("Pinging... :ping_pong:");
  const latency = msg.createdTimestamp - message.createdTimestamp;
  const api = client.ws.ping;
  const uptime = ms(client.uptime, {
    long: true
  });
  msg.delete();
  const embed = new Discord.MessageEmbed()
    .setAuthor("🏓 Pong!")
    .addField("<:Vermoji:777688432842899456> Latency", `\`${latency}ms\``, true)
    .setColor("RANDOM")
    .addField("<:Vermoji:777688432842899456> API", `\`${api}ms\``)
    .addField("<:Vermoji:777688432842899456> Uptime", `\`${uptime}\``, true)
    .setFooter(
      `Requested by ${message.author.username}`,
      message.author.displayAvatarURL({
        dynamic: true
      })
    )
    .setTimestamp();
  return message.channel.send(embed);
};
exports.help = {
  name: "ping",
  description: "Return the bot Latency",
  usage: "ping",
  example: "ping"
};

exports.conf = {
  aliases: ["pong"],
  cooldown: 3
};
