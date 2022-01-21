const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MOGNOD_URI || 'mongodb://localhost/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });

