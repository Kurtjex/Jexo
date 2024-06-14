//file: block.js

//file: block.js

async function getUserName(api, senderID, mentionID) {
  try {
    const userInfo = await api.getUserInfo(senderID);
    return userInfo[senderID]?.name || "User";
  } catch (error) {
    console.log(error);
    return "User";
  }
}

module.exports = {
     config: {
      name: "block",
      role: 1,
      version: "1.0.0",
      author: "Cliff | AkhiroDEV",
      description: " Blocks a user on Facebook to have no access on using the bot",
      usage: "block [ @mention ] / [ reply ] / [ UID ]"
  },
  async onRun ({ api, event, args }) {
      const { mentions, messageReply, threadID, senderID, messageID } = event;
  const mentionID = args[0];
  if (!mentionID && !messageReply) {
    return api.sendMessage(`Please mention the user you want to block.`, threadID, messageID);
  }

  if (mentionID) {
    api.sendMessage("🛡️ | You have been blocked.", mentionID);
    api.sendMessage(`🚫 | ${await getUserName(api, mentionID)} has been blocked Successful.`, threadID, messageID);
    api.changeBlockedStatus(mentionID, true);
  } else if (messageReply) {
    const replySenderID = messageReply.senderID;
    api.sendMessage("🛡️ | You have been blocked.", replySenderID);
    api.sendMessage(`🚫 | ${await getUserName(api, replySenderID)} has been blocked Successful.`, threadID, messageID);
    api.changeBlockedStatus(replySenderID, true);
    }
  }
};
