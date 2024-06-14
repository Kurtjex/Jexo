//file: gen.js

//file: gen.js

//file: gen.js

//file: gen.js

const axios = require('axios');
const path = require('path');
const fs = require('fs-extra');

module.exports = {
  config: {
    name: "gen",
    author: "Vex_Kshitiz | AkhiroDEV",
    role: 0,
    description: "Generates picture through prompt",
    usage: "gen [ prompt ]" 
  },

  onRun: async function ({ api, message, commandName, event, args }) {
    try {
      api.setMessageReaction("⏳", event.messageID, (a) => {}, true);
      const prompt = args.join(' ');

      const response = await axios.get(`https://imagegeneration-kshitiz-odpj.onrender.com/gen?prompt=${encodeURIComponent(prompt)}`);
      const imageUrls = response.data.response;

      const imgData = [];
      const numberOfImages = 4;

      for (let i = 0; i < Math.min(numberOfImages, imageUrls.length); i++) {
        const imageUrl = imageUrls[i];
        const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'tmp', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        imgData.push(fs.createReadStream(imgPath));
      }
      

      await api.sendMessage({ body: '', attachment: imgData }, event.threadID, event.messageID);
    } catch (error) {
      console.error("Error:", error);
      api.sendMessage(`ERROR: ${error.message}`, event.threadID, event.messageID);
    }
  }
};
