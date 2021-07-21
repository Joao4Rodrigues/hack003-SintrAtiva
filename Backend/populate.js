const {
    insertUser, 
    closeConnection
} = require('./data/db');

const arr = [
    { name: 'user1'},    
];

async function insert() {
    for( const user of arr) {
        await insertUser(user);
    }
    closeConnection();
}

insert().then(() => console.log("done"));

