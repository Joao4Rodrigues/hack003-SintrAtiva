const {
    insertComment, 
    closeConnection
} = require('./data/db');

const arr = [
    { name: 'comment'},    
];

async function insert() {
    for( const comment of arr) {
        await insertComment(comment);
    }
    closeConnection();
}

insert().then(() => console.log("done"));

