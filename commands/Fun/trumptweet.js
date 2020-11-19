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
      encodeURI(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`)
    );
    let json = await res.json();
    let attachment = new Discord.MessageAttachment(
      json.message,
      "trumptweet.png"
    );
    message.channel.send(attachment);
    m.delete({ timeout: 5000 });
  } catch (e) {
    m.edit(e.message);
  }
};
exports.help = {
  name: "trumptweet",
  description: "",
  usage: "trumptweet <text>",
  example: "trumptweet "
};

exports.conf = {
  aliases: [],
  cooldown: 3
};
