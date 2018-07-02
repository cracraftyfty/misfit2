const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('Soilders are arming and reloading!! Give em time u will get help soon! HOORAH!!');
  	}
});

client.on('message', message => {
    if (message.content === 'armor pls') {
    	message.reply('ID Proof required!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
