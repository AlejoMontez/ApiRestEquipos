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
        logo: 'http://static.logomaker.com.s3-us-west-2.amazonaws.com/wp-content/uploads/2015/06/Atlanta-Hawks-PacMan-Logo.png',
        entranador: 'Mike Budenholzer',
        estadio: [
            {pabellon: 'Philips Arena', capacidad: '18.047', propiedad: 'Pública', año: '1999', ciudad: 'Atlanta',
             url: 'http://nba.cdn.turner.com/nba/big/teams/hawks/2016/11/04/1478278120976-Incredible-Time-Lapse-Shows-7-Events-In-8-Days-at-Philips-Arena-915575-8.576x324.jpg '}
        ],
        jugadores: [
            {id: 1, nombre: 'Malcolm Delaney'},
            {id: 2, nombre: 'Jaylen Morris'},
            {id: 3, nombre: 'John Collins'},
            {id: 4, nombre: 'Miles Plumlee'},
            {id: 5, nombre: 'Josh Magette'}
        ]
    },
    {
        id: 2,
        nombre: 'Boston Celtics',
        logo: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Celtics.jpg',
        entranador: 'Brad Stevens',
        estadio: [
            {pabellon: 'TD Garden', capacidad: '18.624', propiedad: 'Privada', año: '1995', ciudad: 'Boston',
             url: 'http://www.destination360.com/north-america/us/massachusetts/images/s/td-garden.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Terry Rozier'},
            {id: 2, nombre: 'Abdel Nader'},
            {id: 3, nombre: 'Marcus Morris'},
            {id: 4, nombre: 'Greg Monroe'},
            {id: 5, nombre: 'Kadeem Allen'}
        ]
    },
    {
        id: 3,
        nombre: 'Brooklyn Nets',
        logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fbkn.png',
        entranador: 'Kenny Atkinson',
        estadio: [
            {pabellon: 'Barclays Center', capacidad: '17.732', propiedad: 'Pública', año: '2012', ciudad: 'Nueva York',
             url: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/barclays_center_parking.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Spencer Dinwiddie'},
            {id: 2, nombre: 'Caris LeVert'},
            {id: 3, nombre: 'Joe Harris'},
            {id: 4, nombre: 'Dante Cunningham'},
            {id: 5, nombre: 'Quincy Acy'}
        ]
    },{
        id: 4,
        nombre: 'Charlotte Hornets',
        logo: 'http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcha.png',
        entranador: 'Steve Clifford',
        estadio: [
            {pabellon: 'Spectrum Center', capacidad: '19.077', propiedad: 'Pública', año: '2005', ciudad: 'Charlotte',
             url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cZ698LmrsmlsHx5CHkJGpJjGmAJrWtidWQHkg9DInQNhPKwgUQ'}
        ],
        jugadores: [
            {id: 1, nombre: 'Kemba Walker'},
            {id: 2, nombre: 'Nicolas Batum'},
            {id: 3, nombre: 'Dwayne Bacon'},
            {id: 4, nombre: 'Marvin Williams'},
            {id: 5, nombre: 'Cody Zeller'}
        ]
    },{
        id: 5,
        nombre: 'Chicago Bulls',
        logo: 'http://ticketcrusader.com/wp-content/uploads/2015/09/Chicago-Bulls.jpg',
        entranador: 'Fred Hoiberg',
        estadio: [
            {pabellon: 'United Center', capacidad: '20.917', propiedad: 'Privada', año: '1994', ciudad: 'Chicago',
             url: 'http://www.insidearenas.com/wp-content/uploads/2016/09/united2011.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Kris Dunn'},
            {id: 2, nombre: 'David Nwaba'},
            {id: 3, nombre: 'Paul Zipser'},
            {id: 4, nombre: 'Noah Vonleh'},
            {id: 5, nombre: 'Cristiano Felicio'}
        ]
    },
    {
        id: 6,
        nombre: 'Cleveland Cavaliers',
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/07/2017-Cleveland-Cavaliers-logo-design.png',
        entranador: 'Tyronn Lue',
        estadio: [
            {pabellon: 'Quicken Loans Arena', capacidad: '20.562', propiedad: 'Pública', año: '1994', ciudad: 'Cleveland',
             url: 'http://crg.us.com/wp-content/uploads/2015/07/cavs-flames_1_mg_7184-final.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'George Hill'},
            {id: 2, nombre: 'Rodney Hood'},
            {id: 3, nombre: 'LeBron James'},
            {id: 4, nombre: 'Okaro White'},
            {id: 5, nombre: 'Tristan Thompsoncio'}
        ]
    },
    {
        id: 7,
        nombre: 'Dallas Mavericks',
        logo: 'http://www.caratulasylogos.com/sites/default/files/styles/medium/public/escudos/dallas_mavericks.jpg?itok=50mQfAFA',
        entranador: 'Michael Lue',
        estadio: [
            {pabellon: 'American Airlines Center', capacidad: '19.200', propiedad: 'Pública', año: '2001', ciudad: 'Dallas',
             url: 'http://stadiumparkingguides.com/wp-content/uploads/2014/10/american_airlines_center_parking.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Yogi Ferrell'},
            {id: 2, nombre: 'Seth Curry'},
            {id: 3, nombre: 'Harrison Barnes'},
            {id: 4, nombre: 'Dwight Powell'},
            {id: 5, nombre: 'Salah Mejri'}
        ]
    },
    {
        id: 8,
        nombre: 'Denver Nuggets',
        logo: 'http://ava7.com/w/basketball-teams/denver-nuggets/denver-nuggets-nba-basketball-team.jpg',
        entranador: 'Steve Curry',
        estadio: [
            {pabellon: 'Pepsi Center', capacidad: '19.155', propiedad: 'Privada', año: '1999', ciudad: 'Denver',
             url: 'http://emmashercliff.typepad.com/photos/uncategorized/2008/04/08/p3290095.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Devin Harris'},
            {id: 2, nombre: 'Gary Harris'},
            {id: 3, nombre: 'Wilson Chandler'},
            {id: 4, nombre: 'Paul Millsap'},
            {id: 5, nombre: 'Mason Plumlee'}
        ]
    },
    {
        id: 9,
        nombre: 'Detroit Pistons',
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/05/2017-detroit-pistons-logo-design.png',
        entranador: 'Stan Van Gundy',
        estadio: [
            {pabellon: 'Little Caesars Arena', capacidad: '20.491', propiedad: 'Pública', año: '2017', ciudad: 'Detroit',
             url: 'http://lajugadafinanciera.com/wp-content/uploads/2016/11/Little-Caesars-Arena.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Ish Smith'},
            {id: 2, nombre: 'Luke Kennard'},
            {id: 3, nombre: 'James Ennis'},
            {id: 4, nombre: 'Anthony Tolliver'},
            {id: 5, nombre: 'Eric Moreland'}
        ]
    },
    {
        id: 10,
        nombre: 'Golden State Warriors',
        logo: 'http://1.bp.blogspot.com/-p9rKsv3kPKM/VCgVOu5ayrI/AAAAAAAAFDc/niSaiuT940U/w1200-h630-p-k-no-nu/Logo%2BGolden%2BState%2BWarriors.png',
        entranador: 'Steve Kerr',
        estadio: [
            {pabellon: 'Oracle Arena', capacidad: '19.596', propiedad: 'Pública', año: '1966', ciudad: 'Oakland',
             url: 'http://alphamechanicalservice.com/wp-content/uploads/2014/06/SanAntonio-1.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Stephen Curry'},
            {id: 2, nombre: 'Klay Thompson'},
            {id: 3, nombre: 'Kevin Durant'},
            {id: 4, nombre: 'Draymond Green'},
            {id: 5, nombre: 'Damian Jones'}
        ]
    },
     {
        id: 11,
        nombre: 'Houston Rockets',
        logo: 'http://foxsportstexarkana.com/wp-content/uploads/2018/04/houston_rockets.png',
        entranador: 'Mike Antoni',
        estadio: [
            {pabellon: 'Toyota Center', capacidad: '18.055', propiedad: 'Pública', año: '2003', ciudad: 'Houston',
             url: 'http://1c71hb3in51z3g8k1j1nogrdvsm.wpengine.netdna-cdn.com/wp-content/uploads/2017/11/1920px-Toyota_Center_inside.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Eric Gordon'},
            {id: 2, nombre: 'James Harden'},
            {id: 3, nombre: 'Joe Johnson'},
            {id: 4, nombre: 'Ryan Anderson'},
            {id: 5, nombre: 'Zhou Qi'}
        ]
    },
     {
        id: 12,
        nombre: 'Indiana Pacers',
        logo: 'http://thecourtsidecollective.com/wp-content/uploads/2012/10/indiana-pacers.gif',
        entranador: 'Nate McMillan',
        estadio: [
            {pabellon: 'Bankers Life Fieldhouse', capacidad: '18.165', propiedad: 'Pública', año: '1999', ciudad: 'Indiana',
             url: 'http://www.ehc-global.com/wp-content/uploads/2016/09/Americas-USA-Bankers-Life-Fieldhouse-02.jpg'}
        ],
        jugadores: [
            {id: 1, nombre: 'Cory Joseph'},
            {id: 2, nombre: 'Victor Oladipo'},
            {id: 3, nombre: 'Bojan Bogdanovic'},
            {id: 4, nombre: 'Domantas Sabonis'},
            {id: 5, nombre: 'Ben Moore'}
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