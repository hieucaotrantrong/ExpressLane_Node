const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
//db-------------
const route = require('./routes');
const db = require('./config/db');
db.connect();
//Api routes
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// public
app.use(express.static(path.join(__dirname, 'public')));
//temples
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: function (a, b) {
            return a + b;
        }
    }

}));
//http
app.use(methodOverride('_method'))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//routes init
route(app)


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
