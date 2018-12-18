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
  client.guilds.find('id', 'SERVER ID').fetchMembers().then(members => {
        const role = members.roles.find('name', 'new role2')

        role.members.forEach(member => {
              console.log(member.user.lastMessage) // null
      if (datediff(parseDate(moment(member.user.lastMessage).format('l')), parseDate(moment().format('l'))) > 1) {
		member.ban()
	      }; 
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
		   
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
};
	})
  })
  client.on('guildMemberUpdate', (oldMember, newMember) => {
    oldMember.guild.fetchMembers().then(LastSeen => {
      if (datediff(parseDate(moment(newMember.user.lastMessage).format('l')), parseDate(moment().format('l'))) > 1) {
		newMember.ban()
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
client.on("message", message => {
  var prefix = ('!')
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
	var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
	if( !message.guild ) return;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		}
	} else {
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
   if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
};
});
      client.login(process.env.BOT_TOKEN); 
