const dialogflow = require('@google-cloud/dialogflow');
const path = require('path');

const serviceAccountPath = path.join(
  __dirname,
  '../../dialogflow-service-account.json'
);

// Dialogflow session client
const dialogFlowClient = new dialogflow.SessionsClient({
  keyFilename: serviceAccountPath,
});

module.exports = { dialogFlowClient };
