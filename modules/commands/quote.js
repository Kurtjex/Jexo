const axios = require('axios');
module.exports = {
  config: {
  name: "quote",
  version: "1.0.0",
  role: 0,
  usePrefix: true,
  description: "Get a random inspirational quote.",
  usage: "quote",
  author: "konbert",
  cooldown: 0
},
 async onRun({
  message,
  event
}) {
  const {
    threadID,
    messageID
  } = event;
  try {
    const response = await axios.get('https://api.quotable.io/random');
    const {
      content,
      author
    } = response.data;
    message.reply(`"${content}" - ${author}`, threadID, messageID);
  } catch (error) {
    message.reply("Sorry, I couldn't fetch a quote at the moment. Please try again later.", threadID, messageID);
  }
}
  };
