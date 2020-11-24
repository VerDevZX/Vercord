const Discord = require("discord.js");
const changelog = require("../../changelog.json");

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor(0xff0020)
    .setTimestamp()
    .setTitle("Vercord's Changelog:")
    .addField("Changes:", changelog.changelog, true)
    .setFooter("Vercord | Open Source");

  return message.channel.send({ embed });
};

exports.conf = {
  aliases: [],
  cooldown: 1
};

exports.help = {
  name: "changelog",
  description: "Bot changelog",
  usage: "changelog"
};
