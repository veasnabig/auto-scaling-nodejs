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

app.get("/fibo/:n", (req, res) => {
    const n = req.params.n
    function fibonacci(n) {
        let fibSequence = [0, 1];

        while (fibSequence.length < n) {
            fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
        }

        return fibSequence;
    }

    // Example: Generate the first 10 Fibonacci numbers
    let result = fibonacci(n);
    res.send(result)
})

app.listen(port, () => {
    console.log(`Demo app is listen on port: ${port}`)
})