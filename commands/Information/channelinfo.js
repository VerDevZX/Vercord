const { MessageEmbed } = require("discord.js");
const moment = require("moment");

exports.run = async (client, message, args) => {
  const chan = message.channel;

  let topic;
  if (chan.topic && chan.topic.length > 2048) topic = "[Too long to display!]";
  else topic = chan.topic;

  const createdTimestamp = moment.utc(chan.createdAt).format("YYYYMMDD");

  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail("https://vgy.me/9fSC7k.png")
    .setTitle(`Channel Information for #${chan.name}`)
    .addField("<:Vermoji:777688432842899456> Name", ` ${chan.name}`, true)
    .addField("<:Vermoji:777688432842899456> Created", chan.createdAt)
    .addField(
      "<:Vermoji:777688432842899456> Age",
      moment(createdTimestamp, "YYYYMMDD")
        .fromNow()
        .slice(0, -4),
      true
    )
    .addField("<:Vermoji:777688432842899456> Type", chan.type, true)
    .addField("<:Vermoji:777688432842899456> Position", chan.rawPosition, true)
    .addField(
      "<:Vermoji:777688432842899456> Parent",
      !chan.parent ? "None" : chan.parent.name,
      true
    )
    .addField("<:Vermoji:777688432842899456> NSFW", chan.nsfw, true)
    .addField("<:Vermoji:777688432842899456> Deletable", chan.deletable, true)
    .addField(
      "<:Vermoji:777688432842899456> Topic",
      !topic ? "No topic set." : topic,
      true
    )
    .setFooter(`Channel ID: ${chan.id}`, "https://vgy.me/167efD.png");
  message.channel.send({ embed });
};

exports.help = {
  name: "channelinfo",
  description: "Return Channel Info",
  usage: "channelinfo",
  example: "channelinfo"
};

exports.conf = {
  aliases: ["ci"],
  cooldown: 5
};
