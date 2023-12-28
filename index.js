const express = require("express")
const app = express()
const port = 3000;

const data = {
    api: "Express API",
    feature: "Auto Scaling",
    version: "1.0.0",
}

app.get("/", (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Demo app is listen on port: ${port}`)
})