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
  let a = `https://api.alexflipnote.dev/filter/gay?image=${user.user.displayAvatarURL(
    { size: 1024, format: "png" }
  )}`;

  message.channel.send({ files: [{ attachment: a, name: "gaylopelope.png" }] });
  m.delete({ timeout: 5000 });
};

exports.help = {
  name: "gay",
  description: "asu asu asu",
  usage: "gay [@user | nick | id]",
  example: "gay\ngay @Lyd#1337\ngay Lyd\ngay 593774699654283265"
};

exports.conf = {
  aliases: ["tolol"],
  cooldown: 3
};
