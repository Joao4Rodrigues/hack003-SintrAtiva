const { 
    insertSports,
    closeConnection
} = require('./data/db');

const arr = [
    { name: 'Volley', location: ''},
    { name: 'Football', location: 'R. Cidade Desportiva, Queluz'},
    { name: 'Basketball'},
    { name: 'Tennis'}
];

async function insert() {
    for( const sport of arr) {
        await insertSports(sport);
    }
    closeConnection();
}

insert().then(() => console.log("done"));

