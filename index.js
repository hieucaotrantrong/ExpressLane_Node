const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
db.connect();
const app = express();
const port = 3000;


// public
app.use(express.static(path.join(__dirname, 'public')));
//temples
app.engine('hbs', engine({
    extname: '.hbs',

}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//routes init
route(app)


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
