const express = require('express');
const app = express();
const port = 3000;

const database = require('./database');

app.get('/', (req, res) => {
    database.addPeople('User ' + Math.random());
    database.getPeopleList(function (err, results) {
        if (err) {
           return res.send('Database error');
        }

        if (results.length > 0) {
            let response = '<h1>Full Cycle Rocks!</h1><br><h3>Lista de nomes cadastrada no banco de dados:</h3><ul>';
            results.forEach(user => {
                const userName = `<li>${user.name}</li>`;
                response += userName;
            });
            response += '</ul>';
            res.send(response);
        }
    });
    
});

app.listen(port, () => {
    console.log('Running on port ', + port);
});
