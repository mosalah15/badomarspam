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
client.on = (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
  if (!args.join(' ')) return message.channel.send('Please provide a prefix to set server prefix.');
  
  lesstime.set(`serverPrefix_${message.guild.id}`, args.join(' ')).then((serverPrefix) => {
    message.channel.send(`Server Prefix has been set to ${serverPrefix}`);
  });
  };
client.on('message', async (message) => {
    var prefix = '!';
    var fetchedPrefix = await lesstime.fetch(`serverPrefix_${message.guild.id}`);
    if (fetchedPrefix === null || typeof fetchedPrefix === 'undefined') fetchedPrefix = prefix;
    else prefix = fetchedPrefix;
  });
client.on('guildMemberAdd', m => { 
  m.guild.fetchInvites().then(guildInvites => {
const ei = invites[m.guild.id];
    invites[m.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
      if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < lesstime) {
          m.ban()
const logChannel = m.guild.channels.find(channel => channel.name === "fake-invites");
    logChannel.send(`${m} has been banned as a fake account ***Invited by: <@${inviter.id}>***`)
  };
  });  
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
    });
client.login(process.env.BOT_TOKEN); 
