const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#2f3136`;
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
    return message.channel.send(
      `<:VercordWarn:777507392602374184> VercordPerms: You don't have enough permission to use this command. Required permission is **MANAGE_EMOJIS** `
    );
  }

  const emoji = args[0];
  if (!emoji)
    return message.channel.send(
      `<:VercordWarn:777507392602374184> VercordWarn: Please give me a valid emoji!`
    );

  let customemoji = Discord.Util.parseEmoji(emoji);

  if (customemoji.id) {
    const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
      customemoji.animated ? "gif" : "png"
    }`;
    const name = args.slice(1).join(" ");
    message.guild.emojis.create(`${Link}`, `${name || `${customemoji.name}`}`);
    const Added = new MessageEmbed()
      .setTitle(`Emoji Added`)
      .setColor(`${Color}`)
      .setDescription(
        `Emoji Has Been Added To This Server!\n***Name : ${name ||
          `${customemoji.name} | :${customemoji.name}:"`} \n Preview : [Click Me](${Link})***`
      )
      .setFooter(
        "If emoji not added, the slot emoji on this server is full or i dont have permission"
      );
    return message.channel.send(Added);
  } else {
    let CheckEmoji = parse(emoji, { assetType: "png" });
    if (!CheckEmoji[0])
      return message.channel.send(
        `<:VercordWarn:777507392602374184> VercordWarn: Please give me a valid emoji!`
      );
    message.channel.send(
      `<:VercordWarn:777507392602374184> VercordWarn: You can't use default discord emoji!`
    );
  }
};

exports.help = {
  name: "addemoji",
  description: "Return ",
  usage: "addemo [emoji] [emojiname]",
  example: "addemo"
};

exports.conf = {
  aliases: ["addemo"],
  cooldown: 7
};
