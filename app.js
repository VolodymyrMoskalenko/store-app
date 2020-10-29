const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const p = path.join(path.dirname(process.mainModule.filename), 
    'data',
    'products.json'
);
 
fs.readFile(p, (err, data) => {
    if (data.length === 0) {
        fs.writeFile(p, '[]', err => {
            if (err) {
                console.log(err);
            }
        });
    }
});

app.listen(3000);
