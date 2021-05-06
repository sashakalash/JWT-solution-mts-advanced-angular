const express = require('express');
// Конфиг, содержащий secret
const config = require('./config.json');
const app = express();
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Массив пользователей
const users = [
    {id: 1, username: 'user', password: 'password', role: 'USER'},
    {id: 2, username: 'admin', password: 'password', role: 'ADMIN'},
];

async function authenticate({username, password}) {
    const {secret} = config;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({sub: user.username}, secret);
        const {password, ...userWithoutPassword} = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

// JWT Аутентификация
app.use(expressJwt({secret: config.secret}).unless({
    path: [
        // public routes that don't require authentication
        '/authenticate'
    ]
}));

// Обработчик ошибок
app.use((err, req, res, next) => {
    console.log(err);
    if (typeof (err) === 'string') {
        // application error
        return res.status(400).json({message: err});
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({message: 'Invalid Token'});
    }
    // default 500
    return res.status(500).json({message: err.message});
});

app.post('/authenticate', (req, res, next) => {
    authenticate(req.body)
        .then(user => user
            ? res.json(user)
            : res.status(401).json({message: 'Username or password is incorrect'}))
        .catch(err => next(err));
});

app.get('/data', (req, res, next) => {
    res.send([
        {
            "id": 1,
            "first_name": "Jerry",
            "last_name": "Simpson",
            "email": "jsimpson0@ucoz.ru",
            "gender": "Male",
            "ip_address": "254.158.171.180"
        },
        {
            "id": 2,
            "first_name": "Julia",
            "last_name": "Grant",
            "email": "jgrant1@addthis.com",
            "gender": "Female",
            "ip_address": "232.253.154.20"
        }
    ])
});

const port = 4000;
app.listen(port, () => console.log('Server started on port ' + port));


