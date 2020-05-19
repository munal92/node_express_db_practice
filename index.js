const express = require('express');


const server = express();

server.use(express.json());

PORT = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.send('<h1> server working </h1>')
})

server.listen(PORT, () => {
    console.log(`\n ///---> SERVER RUNNING ${PORT}`)
}
)