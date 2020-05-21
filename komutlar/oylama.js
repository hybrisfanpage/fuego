const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      "Bu komutu kullanabilmek için **ADMINISTRATOR** yetkisi gerekir"
    );
 
  let question = args.join(" ");
  if (!question)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setColor("#ff0000")
        .addField("⛔ **Doğru Kullanım** ⛔", `=> %oylama **mesaj**`)
    );
 
  message.channel.send(
    `**:fire: everyone - here atılsın mı?\n:fire: \`evet\` veya  \`hayır\` olarak cevap veriniz.**`
  );
  message.channel
    .awaitMessages(response => response.content === "evet", {
      max: 1,
      time: 10000,
      errors: ["time"]
    })
    .then(collected => {
      message.channel
        .sendEmbed(
          new Discord.RichEmbed()
 
            .setColor("#ff0000")
            .setThumbnail(client.user.avatarURL)
            .setTimestamp()
            .setFooter("Fuego Bot", client.user.avatarURL)
            .addField(`**🔥 OYLAMA**`, ` **${question}** `)
        )
 
        .then(function(message) {
          message.react("✅").then(sıra => {
            message.react("⛔");
          });
        })
        .then(everyone => {
          message.channel.send(" @everyone @here ").then(m => m.delete(50));
        });
    });
  message.channel
    .awaitMessages(response => response.content === "hayır", {
      max: 1,
      time: 10000,
      errors: ["time"]
    })
    .then(collected => {
      message.channel
        .sendEmbed(
          new Discord.RichEmbed()
 
            .setColor("#ff0000")
            .setThumbnail(client.user.avatarURL)
            .setTimestamp()
            .setFooter("Fuego Bot", client.user.avatarURL)
            .addField(`**🔥 OYLAMA**`, ` **${question}** `)
        )
        .then(function(message) {
          message.react("✅").then(sıra => {
            message.react("⛔");
          });
        });
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["anket"],
  permLevel: 0
};
exports.help = {
  name: "oylama",
  description: "Espri yapar.",
  usage: "oylama yapalım mı?"
};