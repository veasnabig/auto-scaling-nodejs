const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Auto scale demo app with NodeJs")
})

app.listen(port, () => {
    console.log(`Demo app is listen on port: ${port}`)
})