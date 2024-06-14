//file: getstate.js

//file: getstate.js

module.exports = {
  config: {
    name: "getstate",
    version: "69.0",
    author: "Rui",
    description: "get ur appstate",
    usage: "{pn}",
    role: 1
  },

  onRun: async ({ api, event }) => {
    api.sendMessage(`${JSON.stringify(api.getAppState(), null, 2)}`, event.senderID);

    api.sendMessage("check pms, sent appState", event.threadID, event.messageID);
  },
};
