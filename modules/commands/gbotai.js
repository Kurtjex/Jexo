//file: gbotai.js

//file: gbotai.js

const axios = require("axios");

module.exports = {
  config: {
    name: "gbotai",
    author: "Arthur",
    description: "generates a goatbot command code through prompt",
    usage: "gbotai [ prompt ]"
  },
  async onRun({ message, args }){
    const prompt = args.join(" ");
    if(!prompt){
      return message.reply("Please provide a prompt to generate a code for gbot");
    }
    try {
      message.send("Answering...");
      const response = await axios.get(`https://liaspark.chatbotcommunity.ltd/@CodingAI_Liane/api/goatbot?key=j86bwkwo-8hako-12C&query=${encodeURIComponent(prompt)}`)
      const answer = response.data.raw;

      message.send(answer);
    } catch (error) {
      console.log(error);
      message.send(`ERROR: ${error.stack}`)
    }
  }
}
