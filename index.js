require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const routes = require('./routes/index');

app.use('/api', routes);



app.listen(process.env.PORT, () => console.log('...listening on port 3000!'));