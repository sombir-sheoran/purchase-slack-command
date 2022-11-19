const express = require('express')
const app = express()

app.post('/purchase', async(req, res) =>{
    console.log(req);
})

const port = 9647;

app.listen(port, () =>{
    console.log(`Slack bot server started on the port ${port}`);
})

// app.get('/', (req, res) => {
//   res.send('Hello World, how are you doing.')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })