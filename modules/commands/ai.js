const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    version: "1.0.0",
    description: "AI command",
    usage: "{pn} [message]",
    author: "Rui",
    cooldown: 5,
    usePrefix: false,
    role: 0,
  },
  async onRun({ fonts, api, message, args }) {
    const query = args.join(" ");

    if (!query) {
      message.react("❓");
      message.reply("❌ | Please provide a query!");
    } else {
      const info = await
message.reply(`🔍 | ${query}`);
      message.react ("🕒");
      const response = await axios.get(`https://akhiro-rest-api.onrender.com/api/gpt4?q=${encodeURIComponent(query)}`);
message.react("✔️");
      api.editMessage(
        `${fonts.bold("🤖 | AI")}\n━━━━━━━━━━━━━━━\n${response.data.content}\n\nplease join this gp: https://facebook.com/groups/1108106930301482/`,
        info.messageID,
      );
    }
  },
};
