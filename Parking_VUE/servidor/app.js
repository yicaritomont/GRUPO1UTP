// Importaciones
import express  from 'express';
import morgan  from 'morgan';
import cors  from 'cors';
import path  from 'path';

const app = express();

// conexión a base de datos
const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/parking";
const options = {useNewUrlParser: true, useUnifiedTopology:true};
// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to
   mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
   );

//Implementaciones middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname,'public')));


// RUTAS 
app.use('/user',require('./rutas/usuario'));
app.use('/park',require('./rutas/parqueadero'));
app.use('/client',require('./rutas/cliente'));
app.use('/date',require('./rutas/separacion'));
app.use('/city',require('./rutas/ciudad'));


const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));
/*app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});*/

// PUERTO
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
 console.log('Example app listening on port '+ app.get('puerto'));
});
