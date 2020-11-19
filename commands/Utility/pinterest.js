const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  let textt = args.join(" ");
  let y = Math.floor(Math.random() * 49);
  require("node-superfetch")
    .get("http://api.fdci.se/sosmed/rep.php?gambar=" + textt)
    .then(x => JSON.parse(x.text))
    .then(cok =>
      message.channel.send(
        new MessageEmbed()
          .setAuthor(
            "Pinterest Results",
            "https://pbs.twimg.com/media/EMi7Jt3VAAAMBV7?format=png&name=small"
          )
          .setImage(cok[y])
          .setFooter("Powered By : Pinterest")
          .setColor("#2f3136")
      )
    ); //
};

exports.help = {
  name: "pinterest",
  description: "Return pinterest image",
  usage: "pinterest <args>",
  example: "pinterest aesthetic"
};

exports.conf = {
  aliases: ["pin"],
  cooldown: 3
};
