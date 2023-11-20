const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');

function addPeople(name) {
    const connection = mysql.createConnection(config);
    const SQL = `INSERT into people(name) values('${name}')`;
    connection.query(SQL);
    connection.end();
}

function getPeopleList(callback) {
    const connection = mysql.createConnection(config);
    const SQL = `SELECT * FROM people`;
    connection.query(SQL, callback);
    connection.end();
}

module.exports = {addPeople, getPeopleList};