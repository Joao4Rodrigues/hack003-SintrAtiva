const { 
    insertSports,
    closeConnection
} = require('./data/db');

const arr = [
    { name: 'Volley'}, //Voleibol
    { name: 'Football'}, //Futebol  
    { name: 'Basketball'}, //Basquetebol
    { name: 'Tennis'} //Ténis - mudei isto para os nomes em PT, mas na app e no mongo depois continuava tudo a aparecer em ING, então voltei a meter como estava. acho que era melhor se conseguíssemos mudar isso, mas não é preocupante
];

async function insert() {
    for( const sport of arr) {
        await insertSports(sport);
    }
    closeConnection();
}

insert().then(() => console.log("done"));

