const { 
    insertSports,
    closeConnection
} = require('./data/db');

const arr = [
    { name: 'Volley'},
    { name: 'Football'},
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

