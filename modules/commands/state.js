//file: state.js

//file: state.js

const axios = require("axios");

module.exports = {
  config: {
    name: "state",
    role: 0,
    author: "Mark | AkhiroDEV",
    description: "Sends a c3c Appstate",
    usage: "state [email] [password]"
  },
  async onRun({ message, args, api }) {
    if (args.length !== 2) {
      return message.reply("Please provide an email and password. \n\nExample: state [email] [password]");
    }

    const [email, password] = args.map(arg => arg.trim());

    const response = await message.reply("Generating state for you");

    try {
      const state = await axios.get(`https://appstates.onrender.com/fbcookie?user=${email}&pass=${password}`);
      const stateData = state.data;

      api.editMessage(JSON.stringify(stateData, null, 4), response.messageID);
    } catch (error) {
      console.error(error);
      message.reply(`ERROR: ${error.message}`);
    }
  }
};
