const express = require('express')
const path = require('path');
const app = express()
const port = 3000
//! Download nodemon using npm i -g nodemon and instantiate the nodemon from this express file 
app.get('/', (req, res) => {
    console.log(req);
    console.log(req.query.name); //* to get the request /?name=Prajwal 
    console.log(req.query);
    res.send('Hello World!') //* the response will be here
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html')); //* to create a page using html
    // res.send('This is about page') //* to send a message
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})