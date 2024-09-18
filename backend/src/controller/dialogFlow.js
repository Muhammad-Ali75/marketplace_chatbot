const { dialogFlowClient } = require('../config/dialogFlow');

const projectID = process.env.PROJECT_ID;

const detectIntent = async (query, sessionId) => {
  const sessionPath = dialogFlowClient.projectAgentSessionPath(
    projectID,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: 'en',
      },
    },
  };

  console.log('REQU==========', request);
  try {
    const responses = await dialogFlowClient.detectIntent(request);
    console.log(responses);
    return responses[0].queryResult.fulfillmentText;
  } catch (error) {
    console.log('Dialog flow', error);
  }
};

module.exports = { detectIntent };
