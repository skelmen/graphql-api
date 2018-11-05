const express = require('express');
const api = require('./api');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello GraphQL');
});

server.use('/api', api);

server.listen(3000, ()=>console.log('Server is working'));