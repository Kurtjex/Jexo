//file: celestine.js

//file: celestine.js

const axios = require("axios");

module.exports = {
  config: {
    name: "celestine",
    author: "Arthur",
    description: "generates a goatbot command code through prompt",
    usage: "gbotai [ prompt ]"
  },
  async onRun({ message, args }){
    const prompt = args.join(" ");
    if(!prompt){
      return message.reply("Hello baby, got anything to say?");
    }
    try {
      message.reply("Answering to you lovely message....");
      const response = await axios.get(`https://liaspark.chatbotcommunity.ltd/@unregistered/api/celestine?key=j86bwkwo-8hako-12C&query=${encodeURIComponent(prompt)}`)
      const answer = response.data.raw;

      message.reply(answer);
    } catch (error) {
      console.log(error);
      message.reply(`ERROR: ${error.stack}`)
    }
  }
}
