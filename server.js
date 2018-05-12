const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
//puerto para conectarse
const PORT = process.env.PORT || 5000

let teams = [
    {
        id: 1,
        nombre: 'Atlanta Hawks',
        logo: '',
        estadio: [
            {pabellon: 'Philips Arena', capacidad: '18.047', propiedad: 'Pública', año: '1999', ciudad: 'Atlanta',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 2,
        nombre: 'Boston Celtics',
        logo: '',
        estadio: [
            {pabellon: 'TD Garden', capacidad: '18.624', propiedad: 'Privada', año: '1995', ciudad: 'Boston',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 3,
        nombre: 'Brooklyn Nets',
        logo: '',
        estadio: [
            {pabellon: 'Barclays Center', capacidad: '17.732', propiedad: 'Pública', año: '2012', ciudad: 'Nueva York',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },{
        id: 4,
        nombre: 'Charlotte Hornets',
        logo: '',
        estadio: [
            {pabellon: 'Spectrum Center', capacidad: '19.077', propiedad: 'Pública', año: '2005', ciudad: 'Charlotte',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },{
        id: 5,
        nombre: 'Chicago Bulls',
        logo: '',
        estadio: [
            {pabellon: 'United Center', capacidad: '20.917', propiedad: 'Privada', año: '1994', ciudad: 'Chicago',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 6,
        nombre: 'Cleveland Cavaliers',
        logo: '',
        estadio: [
            {pabellon: 'Quicken Loans Arena', capacidad: '20.562', propiedad: 'Pública', año: '1994', ciudad: 'Cleveland',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 7,
        nombre: 'Dallas Mavericks',
        logo: '',
        estadio: [
            {pabellon: 'American Airlines Center', capacidad: '19.200', propiedad: 'Pública', año: '2001', ciudad: 'Dallas',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 8,
        nombre: 'Denver Nuggets',
        logo: '',
        estadio: [
            {pabellon: 'Pepsi Center', capacidad: '19.155', propiedad: 'Privada', año: '1999', ciudad: 'Denver',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 9,
        nombre: 'Detroit Pistons',
        logo: '',
        estadio: [
            {pabellon: 'Little Caesars Arena', capacidad: '20.491', propiedad: 'Pública', año: '2017', ciudad: 'Detroit',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
    {
        id: 10,
        nombre: 'Golden State Warriors',
        logo: '',
        estadio: [
            {pabellon: 'Oracle Arena', capacidad: '19.596', propiedad: 'Pública', año: '1966', ciudad: 'Oakland',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
     {
        id: 11,
        nombre: 'Houston Rockets',
        logo: '',
        estadio: [
            {pabellon: 'Toyota Center', capacidad: '18.055', propiedad: 'Pública', año: '2003', ciudad: 'Houston',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    },
     {
        id: 12,
        nombre: 'Indiana Pacers',
        logo: '',
        estadio: [
            {pabellon: 'Bankers Life Fieldhouse', capacidad: '18.165', propiedad: 'Pública', año: '1999', ciudad: 'Indianapolis',
             url: ''}
        ],
        jugadores: [
            {id: 1, nombre: 'carlos'},
            {id: 2, nombre: 'juan'}
        ]
    }
    
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/teams
app.get('/teams', (req, res) => {
    res.send(teams)
})


// http://127.0.0.1:5000/teams
app.post('/teams', (req, res) => {
    let data = req.query;
    teams.push(data.teams_name)
    res.send("New team add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/teams/1
app.patch('/teams/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    teams[params.id] = data
    res.send("Team update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/teams/1
app.delete('/teams/:id',(req, res) => {
    let params = req.params;
    teams.splice(params.id, 1);
    res.send('Team delete')
})

// ********************************************************************
// ********************************************************************

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})