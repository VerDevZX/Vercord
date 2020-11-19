const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;

  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }

  let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

  const embed = new Discord.MessageEmbed()
    .setTitle(`${user.tag}`)
    .setDescription(`[**${user.tag}**](${avatar})`)
    .setColor(0x1d1d1d)
    .setImage(avatar);

  return message.channel.send(embed);
};

exports.help = {
  name: "avatar",
  description: "Return avatar url ",
  usage: "avatar [user]",
  example: "avatar"
};

exports.conf = {
  aliases: ["av"],
  cooldown: 3
};
