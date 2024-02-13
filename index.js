const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

let answer = {
    yes: 0,
    no: 0
}


app.get('/answer', (req, res) => {
    res.json(answer)
});

app.put('/yes', (req,res) => {
    answer.yes += 1;
    res.json(answer);
})

app.put('/no', (req,res) => {
    answer.no += 1;
    res.json(answer);
})

app.delete('/clear', (req,res) => {
    answer =
    {
        yes: 0,
        no: 0
    }
    res.json(answer);
})


app.listen(9000, () => {
    console.log("Escuchando server");
})