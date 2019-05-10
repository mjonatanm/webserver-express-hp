const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'jonatan',
            edad: 30,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Hola mundo'); //Escribe el texto en el navegador.
        res.end(); //Siempre debemos cerrar la "respuesta" sino queda esperando el cierre.
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');