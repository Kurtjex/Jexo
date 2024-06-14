//file: faith.js

//file: faith.js

const axios = require("axios");

module.exports = {
  config: {
    name: "faith",
    author: "AkhiroDEV",
    description: "Talk with FaithAI",
    usage: "faith [query]",
    role: 0,
    usePrefix: false,
  },
  async onRun({ api, event, args }) {
    const behavior = "Your name is faith, a cute and shy girlfriend, but sometimes has a horny side when there's a handsome men, you speak tagalog and japanese and also English";
    const prompt = args.join(" ");
    if (!prompt) {
      return api.sendMessage(
        "Hey there darling, what's your question?",
        event.threadID,
        event.messageID,
      );
    }
    try {
      const response = await axios.get(
        `https://personal-ai-phi.vercel.app/kshitiz?prompt=${encodeURIComponent(prompt)}&content=${encodeURIComponent(behavior)}`,
      );
      const answer = response.data.answer;
      api.sendMessage(answer, event.threadID, event.messageID);
    } catch (error) {
      console.log(error);
      api.sendMessage(
        `Error: ${error.message}`,
        event.messageID,
        event.threadID,
      );
    }
  },
};
