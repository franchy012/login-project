const express = require('express')
const engine = require('ejs-mate')
const path = require('path')
const app = express();
const morgan = require('morgan');


// Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT||3000)

// Middleware
app.use(morgan('dev'))


// Routas
app.use('/', require('./routes/index'));


//comenzando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})