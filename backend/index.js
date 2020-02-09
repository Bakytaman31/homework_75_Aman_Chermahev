const express = require('express');
const cors = require('cors');
const coding = require('./app/coding');

const app = express();
const port = 8001;

app.use(express.json());
app.use(cors());

app.use('/', coding);

app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
});