const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const { version } = require("../../package");

exports.run = async (client, message, args) => {
  const footer = `Copyright © 2020 Vercord Development`;
  const waktu = moment
    .duration(client.uptime)
    .format(" D [Days], H [hrs], m [mins], s [secs]");
  let dev1 = client.users.cache.get("552492140270452736").tag;
  let dev2 = client.users.cache.get("593774699654283265").tag;
  let guilds = client.guilds.cache.size;
  let users = client.users.cache.size;
  let cmd = client.commands.size;
  let channels = client.channels.cache.size;
  let a = require("os");
  message.channel.send(
    new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
      .setAuthor(`${client.user.username} Stats`, client.user.avatarURL())
      .setFooter(footer)
      .addField(
        "<:Vermoji:777688432842899456> General",
        `***\`\`\`Ping : ${
          client.ws.ping
        } ms\nDatabase : Quick.db\nLanguage : discord.js\nMemory : ${(
          process.memoryUsage().heapUsed /
          1024 /
          1024
        ).toFixed(2)} MB\nUptime : ${waktu}\nVersion: v.${version}\nCreated : ${
          client.user.createdAt
        }\`\`\`***`
      )
      .addField(
        "<:Vermoji:777688432842899456> Vercord Stats",
        `***\`\`\`Guilds : ${guilds} guilds\nUsers : ${users} users\nChannels : ${channels} channels\nCommands : ${cmd} commands\`\`\`***`
      )
      .addField(
        "<:Vermoji:777688432842899456> OS",
        `***\`\`\`Release : ${require("os").release()}\nPlatform : ${require("os").platform()}\nArch : ${a.arch()}\nModel : ${
          a.cpus()[0].model
        }\nSpeed : ${a.cpus()[0].speed}\`\`\`***`
      )
      .addField(
        "<:Vermoji:777688432842899456> Packages",
        `***\`\`\`\nNode-superfetch : ${
          require("node-superfetch").version
        }\nDiscord.js : ${require("discord.js").version}\nMoment : ${
          require("moment").version
        }\nQuick.db : ${require("quick.db").version}\`\`\`***`
      )
      .setColor("#2f3136")

      .addField(
        "<:Vermoji:777688432842899456> Our Team",
        `***\`\`\`\nMain Developer : ${dev1}, ${dev2}\nBug Hunter : ${dev1}, ${dev2}\`\`\`***`
      )
      .setColor("#2f3136")
  );
};
exports.help = {
  name: "stats",
  description: "Return bot stats",
  usage: "stats",
  example: "stats"
};

exports.conf = {
  aliases: ["stat"],
  cooldown: 3
};
