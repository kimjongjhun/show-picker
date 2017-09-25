const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'app')
            }
        }

    }
});

server.connection({
    host: 'localhost',
    port: 8000
});

server.register(Inert, (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (req, res) {
            res.file('./index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/{app*}',
        handler: {
            directory: {
                path: 'app',
                listing: true
            }
        }
    })
});


server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('server running on: ', server.info.uri);
});