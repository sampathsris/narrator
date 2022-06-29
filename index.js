
const server = require('live-server');

const params = {
    port: process.env.PORT,
    root: './public',
    wait: 500,
};

server.start(params);
