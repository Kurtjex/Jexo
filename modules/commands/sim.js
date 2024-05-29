module.exports = {
  config: {
	name: "sim",
	version: "1.0.0",
	role: 0,
    usage: "wala",
	author: "kenlie",
	description: "Talk to sim",
	cooldown: 0,
	usePrefix: false
},

async onRun({ message, event, args }) {
	const axios = require("axios");
	let { messageID, threadID, senderID, body } = event;
	let tid = threadID,
	mid = messageID;
	const content = encodeURIComponent(args.join(" "));
	if (!args[0]) return message.reply("Please type a message...", tid, mid);
	try {
		const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=en&message=${content}&filter=true`);
		const respond = res.data.success;
		if (res.data.error) {
			message.reply(`Error: ${res.data.error}`, tid, (error, info) => {
				if (error) {
					console.error(error);
				}
			}, mid);
		} else {
			message.reply(respond, tid, (error, info) => {
				if (error) {
					console.error(error);
				}
			}, mid);
		}
	} catch (error) {
		console.error(error);
		message.reply("An error occurred while fetching the data.", tid, mid);
	}
}
  };
