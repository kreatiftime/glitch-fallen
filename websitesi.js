const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.name + "Websitemizi ziyaret etmeyi unutmayın!")
    .setColor('#18dcff')
    .setURL('fallendarkness.mygamesonline.org')
    .setTitle(':earth_americas: Sitemizin internet adresi :earth_americas:')
    .setDescription('fallendarkness.mygamesonline.org')
     
                message.channel.send(embed);

};

exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: ['websitesi','web','site'], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'websitesi', //adını belirledik (kullanmak için gereken komut)
  description: 'Websitesi açıklaması yapar.', //açıklaması
  usage: 'websitesi' //komutun kullanım şekli (mesela hava <bölge>)
};

//komut taslağımız basit anlatımını zaten dosyalarda bulursunuz
//bu ise bizim komut taslağımız
//bunun üzerinden gideceğiz