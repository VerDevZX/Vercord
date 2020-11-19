const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let text = args.join(" ");

  if (!text) {
    return message.channel.send(
      "<:VercordWarn:777507392602374184> VercordWarn: You need enter a text!"
    );
  }

  let m = await message.channel.send(
    "<a:Verload:777688473679298600> Please wait.."
  );
  try {
    let res = await fetch(
      encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
    );
    let json = await res.json();
    let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
    message.channel.send(attachment);
    m.delete({ timeout: 5000 });
  } catch (e) {
    m.edit(e.message);
  }
};
exports.help = {
  name: "clyde",
  description: "Return text with clyde image",
  usage: "clyde <text>",
  example: "clyde hello world"
};

exports.conf = {
  aliases: ["cly"],
  cooldown: 3
};
