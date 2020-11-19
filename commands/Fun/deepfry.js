const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let user =
    (await message.mentions.members.first()) ||
    message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(
      r => r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
    ) ||
    message.guild.members.cache.find(
      r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
    ) ||
    message.member;
  let m = await message.channel.send(
    "<a:Verload:777688473679298600> Please wait.."
  );
  try {
    let res = await fetch(
      encodeURI(
        `https://nekobot.xyz/api/imagegen?type=deepfry&image=${user.user.displayAvatarURL(
          { format: "png", size: 512 }
        )}`
      )
    );
    let json = await res.json();
    let attachment = new Discord.MessageAttachment(json.message, "deepfry.png");
    message.channel.send(attachment);
    m.delete({ timeout: 5000 });
  } catch (e) {
    console.log(e);
    m.edit(
      "<:VercordWarn:777507392602374184> VercordWarn: Error, Please report it to our developer " +
        e
    );
  }
};

exports.help = {
  name: "deepfry",
  description: "",
  usage: "deepfry [@user | nick | id]",
  example: "deepfry\ndeepfry @Lyd#1337\ndeepfry Lyd\ndeepfry 593774699654283265"
};

exports.conf = {
  aliases: [],
  cooldown: 3
};
