const axios = require('axios');
module.exports = new Object({
  config: new Object({
  name: "insult",
  version: "1.0.0",
  role: 0,
  usePrefix: false,
  description: "Get a random insult.",
  usage: "insult",
  author: "Kurt",
  cooldown: 5
}),
 async onRun({
  message,
  event,
   fonts
}) {
  const {
    threadID,
    messageID
  } = event;
  try {
    const response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const insult = response.data.insult;
    message.reply(`💁🏻 | ${fonts.bold(`Here's a random insult for you`)} ━━━━━━━━━━━━━━━\n ${insult}`, threadID);
  } catch (error) {
    message.reply("🙅🏻 | Sorry, I couldn't fetch an insult at the moment. Please try again later.", threadID, messageID);
  }
}
  });
