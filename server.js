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
        nombret: 'Atlanta Hawks',
        logo: 'http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/06/Atlanta-Hawks-PacMan-Logo.png',
        entrenador: 'Mike Budenholzer',
        estadio: [
            {ide: 1, pabellon: 'Philips Arena', capacidad: '18.047', propiedad: 'Pública', anio: '1999', ciudad: 'Atlanta',
             url: 'http://nba.cdn.turner.com/nba/big/teams/hawks/2016/11/04/1478278120976-Incredible-Time-Lapse-Shows-7-Events-In-8-Days-at-Philips-Arena-915575-8.576x324.jpg '}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Malcolm Delaney'},
            {idj: 2, nombrej: 'Jaylen Morris'},
            {idj: 3, nombrej: 'John Collins'},
            {idj: 4, nombrej: 'Miles Plumlee'},
            {idj: 5, nombrej: 'Josh Magette'}
        ]
    },
    {
        id: 2,
        nombret: 'Boston Celtics',
        logo: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Celtics.jpg',
        entrenador: 'Brad Stevens',
        estadio: [
            {ide: 1, pabellon: 'TD Garden', capacidad: '18.624', propiedad: 'Privada', anio: '1995', ciudad: 'Boston',
             url: 'http://www.destination360.com/north-america/us/massachusetts/images/s/td-garden.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Terry Rozier'},
            {idj: 2, nombrej: 'Abdel Nader'},
            {idj: 3, nombrej: 'Marcus Morris'},
            {idj: 4, nombrej: 'Greg Monroe'},
            {idj: 5, nombrej: 'Kadeem Allen'}
        ]
    },
    {
        id: 3,
        nombret: 'Brooklyn Nets',
        logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbkn.png',
        entrenador: 'Kenny Atkinson',
        estadio: [
            {ide: 1, pabellon: 'Barclays Center', capacidad: '17.732', propiedad: 'Pública', anio: '2012', ciudad: 'Nueva York',
             url: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/barclays_center_parking.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Spencer Dinwiddie'},
            {idj: 2, nombrej: 'Caris LeVert'},
            {idj: 3, nombrej: 'Joe Harris'},
            {idj: 4, nombrej: 'Dante Cunningham'},
            {idj: 5, nombrej: 'Quincy Acy'}
        ]
    },{
        id: 4,
        nombret: 'Charlotte Hornets',
        logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcha.png',
        entrenador: 'Steve Clifford',
        estadio: [
            {ide: 1, pabellon: 'Spectrum Center', capacidad: '19.077', propiedad: 'Pública', anio: '2005', ciudad: 'Charlotte',
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cZ698LmrsmlsHx5CHkJGpJjGmAJrWtidWQHkg9DInQNhPKwgUQ'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Kemba Walker'},
            {idj: 2, nombrej: 'Nicolas Batum'},
            {idj: 3, nombrej: 'Dwayne Bacon'},
            {idj: 4, nombrej: 'Marvin Williams'},
            {idj: 5, nombrej: 'Cody Zeller'}
        ]
    },{
        id: 5,
        nombret: 'Chicago Bulls',
        logo: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Chicago-Bulls.jpg',
        entrenador: 'Fred Hoiberg',
        estadio: [
            {ide: 1, pabellon: 'United Center', capacidad: '20.917', propiedad: 'Privada', anio: '1994', ciudad: 'Chicago',
             url: 'http://www.insidearenas.com/wp-content/uploads/2016/09/united2011.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Kris Dunn'},
            {idj: 2, nombrej: 'David Nwaba'},
            {idj: 3, nombrej: 'Paul Zipser'},
            {idj: 4, nombrej: 'Noah Vonleh'},
            {idj: 5, nombrej: 'Cristiano Felicio'}
        ]
    },
    {
        id: 6,
        nombret: 'Cleveland Cavaliers',
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/07/2017-Cleveland-Cavaliers-logo-design.png',
        entrenador: 'Tyronn Lue',
        estadio: [
            {ide: 1, pabellon: 'Quicken Loans Arena', capacidad: '20.562', propiedad: 'Pública', anio: '1994', ciudad: 'Cleveland',
             url: 'http://crg.us.com/wp-content/uploads/2015/07/cavs-flames_1_mg_7184-final.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'George Hill'},
            {idj: 2, nombrej: 'Rodney Hood'},
            {idj: 3, nombrej: 'LeBron James'},
            {idj: 4, nombrej: 'Okaro White'},
            {idj: 5, nombrej: 'Tristan Thompsoncio'}
        ]
    },
    {
        id: 7,
        nombret: 'Dallas Mavericks',
        logo: 'http://www.caratulasylogos.com/sites/default/files/styles/medium/public/escudos/dallas_mavericks.jpg?itok=50mQfAFA',
        entrenador: 'Michael Lue',
        estadio: [
            {ide: 1, pabellon: 'American Airlines Center', capacidad: '19.200', propiedad: 'Pública', anio: '2001', ciudad: 'Dallas',
             url: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/american_airlines_center_parking.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Yogi Ferrell'},
            {idj: 2, nombrej: 'Seth Curry'},
            {idj: 3, nombrej: 'Harrison Barnes'},
            {idj: 4, nombrej: 'Dwight Powell'},
            {idj: 5, nombrej: 'Salah Mejri'}
        ]
    },
    {
        id: 8,
        nombret: 'Denver Nuggets',
        logo: 'http://ava7.com/w/basketball-teams/denver-nuggets/denver-nuggets-nba-basketball-team.jpg',
        entrenador: 'Steve Curry',
        estadio: [
            {ide: 1, pabellon: 'Pepsi Center', capacidad: '19.155', propiedad: 'Privada', anio: '1999', ciudad: 'Denver',
             url: 'http://emmashercliff.typepad.com/photos/uncategorized/2008/04/08/p3290095.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Devin Harris'},
            {idj: 2, nombrej: 'Gary Harris'},
            {idj: 3, nombrej: 'Wilson Chandler'},
            {idj: 4, nombrej: 'Paul Millsap'},
            {idj: 5, nombrej: 'Mason Plumlee'}
        ]
    },
    {
        id: 9,
        nombret: 'Detroit Pistons',
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/05/2017-detroit-pistons-logo-design.png',
        entrenador: 'Stan Van Gundy',
        estadio: [
            {ide: 1, pabellon: 'Little Caesars Arena', capacidad: '20.491', propiedad: 'Pública', anio: '2017', ciudad: 'Detroit',
             url: 'http://lajugadafinanciera.com/wp-content/uploads/2016/11/Little-Caesars-Arena.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Ish Smith'},
            {idj: 2, nombrej: 'Luke Kennard'},
            {idj: 3, nombrej: 'James Ennis'},
            {idj: 4, nombrej: 'Anthony Tolliver'},
            {idj: 5, nombrej: 'Eric Moreland'}
        ]
    },
    {
        id: 10,
        nombret: 'Golden State Warriors',
        logo: 'http://1.bp.blogspot.com/-p9rKsv3kPKM/VCgVOu5ayrI/AAAAAAAAFDc/niSaiuT940U/w1200-h630-p-k-no-nu/Logo%2BGolden%2BState%2BWarriors.png',
        entrenador: 'Steve Kerr',
        estadio: [
            {ide: 1, pabellon: 'Oracle Arena', capacidad: '19.596', propiedad: 'Pública', anio: '1966', ciudad: 'Oakland',
             url: 'http://alphamechanicalservice.com/wp-content/uploads/2014/06/SanAntonio-1.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Stephen Curry'},
            {idj: 2, nombrej: 'Klay Thompson'},
            {idj: 3, nombrej: 'Kevin Durant'},
            {idj: 4, nombrej: 'Draymond Green'},
            {idj: 5, nombrej: 'Damian Jones'}
        ]
    },
     {
        id: 11,
        nombret: 'Houston Rockets',
        logo: 'http://foxsportstexarkana.com/wp-content/uploads/2018/04/houston_rockets.png',
        entrenador: 'Mike Antoni',
        estadio: [
            {ide: 1, pabellon: 'Toyota Center', capacidad: '18.055', propiedad: 'Pública', anio: '2003', ciudad: 'Houston',
             url: 'http://1c71hb3in51z3g8k1j1nogrdvsm.wpengine.netdna-cdn.com/wp-content/uploads/2017/11/1920px-Toyota_Center_inside.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Eric Gordon'},
            {idj: 2, nombrej: 'James Harden'},
            {idj: 3, nombrej: 'Joe Johnson'},
            {idj: 4, nombrej: 'Ryan Anderson'},
            {idj: 5, nombrej: 'Zhou Qi'}
        ]
    },
     {
        id: 12,
        nombret: 'Indiana Pacers',
        logo: 'http://thecourtsidecollective.com/wp-content/uploads/2012/10/indiana-pacers.gif',
        entrenador: 'Nate McMillan',
        estadio: [
            {ide: 1, pabellon: 'Bankers Life Fieldhouse', capacidad: '18.165', propiedad: 'Pública', anio: '1999', ciudad: 'Indiana',
             url: 'http://www.ehc-global.com/wp-content/uploads/2016/09/Americas-USA-Bankers-Life-Fieldhouse-02.jpg'}
        ],
        jugadores: [
            {idj: 1, nombrej: 'Cory Joseph'},
            {idj: 2, nombrej: 'Victor Oladipo'},
            {idj: 3, nombrej: 'Bojan Bogdanovic'},
            {idj: 4, nombrej: 'Domantas Sabonis'},
            {idj: 5, nombrej: 'Ben Moore'}
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
    let id = teams.length + 1;
    let newTeam = {id: id, nombret: data.nombret, logo: data.logo, entrenador: data.entrenador, 
        estadio: [{ide: data.ide, pabellon: data.pabellon, capacidad: data.capacidad, propiedad: data.propiedad, anio: data.anio, ciudad: data.ciudad}],
        jugadores: [{idj: data.idj, nombrej: data.nombrej}]};
    
    teams.push(newTeam);
    
    res.send("New team add");
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/teams/1
app.patch('/teams/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    let id = parseInt(params.id) + 1;
  
    let newTeam = {id: id, nombret: data.nombret, logo: data.logo, entrenador: data.entrenador, 
        estadio: [{ide: data.ide, pabellon: data.pabellon, capacidad: data.capacidad, propiedad: data.propiedad, anio: data.anio, ciudad: data.ciudad}],
        jugadores: [{idj: data.idj, nombrej: data.nombrej}]};

    teams[params.id] = newTeam
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