const express = require("express")
const app = express();
const DbConnect = require("./config/Bb_connect")

require('dotenv').config()
const PORT = process.env.PORT;

DbConnect();

app.use(express.json());
app.use("/person", require("./routes/person"));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server is running')
});