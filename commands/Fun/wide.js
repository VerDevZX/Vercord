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
  let a = `https://api.alexflipnote.dev/filter/wide?image=${user.user.displayAvatarURL(
    { size: 1024, format: "png" }
  )}`;

  message.channel.send({ files: [{ attachment: a, name: "wide.png" }] });
  m.delete({ timeout: 5000 });
};

exports.help = {
  name: "wide",
  description: "",
  usage: "wide [@user | nick | id]",
  example: "wide\nwide @Lyd#1337\nwide Lyd\nwide 593774699654283265"
};

exports.conf = {
  aliases: ["jelek"],
  cooldown: 3
};
