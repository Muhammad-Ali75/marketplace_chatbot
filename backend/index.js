require('dotenv').config();
const { createServer } = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Server } = require('socket.io');

const { chat } = require('./src/controller/chat');

const app = express();
const server = createServer(app);
const port = process.env.PORT || 4000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initiating socket.
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Connecting socket.
io.on('connection', chat);
io.listen(5000);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
