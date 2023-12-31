const path = require('path');
const express = require('express');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

sequelize.sync({ force: false}).then(() =>{
    app.listen(PORT, () => console.log('Now listening'));
});