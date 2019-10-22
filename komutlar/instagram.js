const Discord = require('discord.js');


exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
      .setAuthor("İnstagram Hesabımızı Takip Etmeyi Unutmayın!")
      .setTitle('@fallendarkness34')
      .setDescription('https://www.instagram.com/fallendarkness34/')
      .setColor('#E1306C')
      .setURL('https://www.instagram.com/fallendarkness34/');
              message.channel.send(embed);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: true, //sadece servere özel yapmadık
  aliases: ['insta'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'instagram', //adını belirledik (kullanmak için gereken komut)
  description: 'İnstagram bilgisi.', //açıklaması
  usage: 'instagram' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz
