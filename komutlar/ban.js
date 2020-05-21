const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("**:fire: Ne yazık ki bu komutu kullanmaya yetkin yok.**")
      .setColor("ff0000");
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription("**:fire: Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz!**")
        .setColor("ff0000")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setDescription(`**🔥 ${u} Adlı şahsın yasaklanmasını onaylıyor musunuz?**`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["🔥"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "🔥") {
        message.channel.send(
          `**🔥 İşlem onaylandı! ${u} adlı şahıs sunucudan yasaklandı!**`
        );
 
        message.guild.ban(u, 2);
      }
    });
  });
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};