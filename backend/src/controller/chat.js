const { detectIntent } = require('./dialogFlow');

const chat = (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('userMessage', async (message) => {
    try {
      const botResponse = await detectIntent(message, socket.id);

      socket.emit('botMessage', botResponse);
    } catch (error) {
      console.error('Error processing Dialogflow intent:', error);
      socket.emit('botMessage', "Sorry, I couldn't process your request.");
    }
  });

  // Handle disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
};

module.exports = { chat };
