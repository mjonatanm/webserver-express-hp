const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

//Configuracion. Se escribe {{ nombre del archivo hbs }}
hbs.registerPartials(__dirname + '/views/parciales'); //Esto nos sirve para reutilizar codigo HTML



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Goku'
    });
    //res.send(salida); //Lo envia directamente.
    //res.send('Hola mundo');
})

app.get('/about', (req, res) => {

    res.render('about');
    //res.send(salida); //Lo envia directamente.
    //res.send('Hola mundo');
})


app.get('/data', (req, res) => {

    res.send('Hola data');
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});