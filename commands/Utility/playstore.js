const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");

exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      `<:VercordWarn:777507392602374184> VercordWarn: Give me Something To Search, ${message.author.username}!`
    );

  PlayStore.search({
    term: args.join(" "),
    num: 1
  }).then(Data => {
    let App;

    try {
      App = JSON.parse(JSON.stringify(Data[0]));
    } catch (error) {
      return message.channel.send(
        `<:VercordWarn:777507392602374184> VercordWarn: 404 No Application Found`
      );
    }

    let Embed = new Discord.MessageEmbed()
      .setColor("BLURPLE")
      .setThumbnail(App.icon)
      .setURL(App.url)
      .setTitle(`${App.title}`)
      .setDescription(App.summary)
      .addField(`Price`, App.priceText, true)
      .addField(`Developer`, App.developer, true)
      .addField(`Score`, App.scoreText, true)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    return message.channel.send(Embed);
  });
};

exports.help = {
  name: "playstore",
  description: "Search some application on play store at discord",
  usage: "playstore <application>",
  example: "playstore discord"
};

exports.conf = {
  aliases: [],
  cooldown: 3
};
