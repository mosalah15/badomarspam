const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

  client.on('guildMemberUpdate', (oldMember, newMember) => {
    oldMember.guild.fetchAuditLogs().then(logs => {
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
            logChannel.send('updateNickname');
      if (datediff(parseDate(moment(newMember.user.lastseen).format('l')), parseDate(moment().format('l'))) < 8) {
          newMember.ban()
};
};
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
});
});
client.on('message', (message,humans,member) => {
if (message.author.bot) return;

  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
    if (command == ('give humans')) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   var role = member.guild.roles.find ("name", "new role2");
   humans.addRole (role);
      client.login(process.env.BOT_TOKEN); 
