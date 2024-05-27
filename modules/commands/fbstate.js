const axios = require('axios');

module.exports = {
config: {
  name: 'fbstate',
  aliases: ['appstate'],
  version: '0.0.1',
  credits: 'atomic-zero',
  role: 0,
  type: 'fb-credentials',
  info: 'get facebook cookies!',
  usage: '[email/uid] [password]',
  guide: 'fbstate johnjoe@gmail.com @atomic0\nfbstate 647282622728 @atomic0',
  cooldown: 10,
},

async onRun({ message, args }) {
  const uid = args[0];
  const password = args.slice(1).join(' ');
  
  if (!uid || !password) {
    message.reply(`Invalid Input!\nUsage: fbstate [email/uid] [password]`);
    return;
  } else {
    message.reply("GETTING APPSTATE....");
  }
  
  try {
    const response = await axios.get(`https://atomic-zero.vercel.app/fbstate?email=${uid}&password=${password}`);
    message.reply(`${JSON.stringify(response.data.c3c)}`);
  } catch (error) {
    message.error("Error retrieving appstate:", error);
    message.reply("An error occurred while fetching the appstate.");
  }
}
  };
