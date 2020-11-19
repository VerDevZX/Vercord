const Discord = require("discord.js");
const Vercord = require("./Verlers/Vercord.js");
const client = new Vercord({ fetchAllMembers: true });
require("./Verlers/module.js")(client); // Module
require("./Verlers/event.js")(client); // Event
const express = require("express");
const app = express();

//join

client.on("guildCreate", guild => {
  const join = client.channels.cache.get("777511424900595714");
  join.send(
    new Discord.MessageEmbed()
      .setTitle(`${client.user.tag}`)
      .addField("Guild :", guild.name)
      .addField("Member :", guild.memberCount)
      .addField("Guild ID", guild.id)
      .setColor("GREEN")
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Server Count : ${client.guilds.cache.size}`)
  );
});

//leave

client.on("guildDelete", guild => {
  const join = client.channels.cache.get("777511445612986426");
  join.send(
    new Discord.MessageEmbed()
      .setTitle(" Removed Server's")
      .addField("Guild :", guild.name)
      .addField("Member :", guild.memberCount)
      .addField("Guild ID", guild.id)
      .setThumbnail(client.user.avatarURL())
      .setColor("RED")
      .setFooter(`Server Count : ${client.guilds.cache.size}`)
  );
});
client.package = require("./package.json");
client.nodefetch = require("node-superfetch");
client.fetch = require("node-fetch");
client.on("warn", console.warn);
client.on("error", console.error);
client.login(process.env.VERCORD);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT);
