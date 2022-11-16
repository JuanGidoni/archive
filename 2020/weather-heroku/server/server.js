const env = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');

const current = require('./routes/current.js');
const forecast = require('./routes/forecast.js');
const location = require('./routes/location.js');

env.config();

const app = express();

const port = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());

app.use(express.json());

app.get("/v1/", (req,res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log('Received GET => currentTime');
});

app.use("/v1/current/", current);
app.use("/v1/forecast/", forecast);
app.use("/v1/location/", location);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})