const { 
    insertEvents,
    closeConnection
} = require('./data/db');

const arr = [
    { event: 'Sintra Portugal Pro regressa em Setembro',
    image: "https://cm-sintra.pt/images/01-CMS2018/banners/bodyboard0058806.jpg",
    date: "07/09/2021 - 12/09/2021",
    info: "A Praia Grande volta a ser palco para a 25ª edição do Sintra Portugal Pro, de 7 a 12 de setembro. A edição de 2021 servirá para atribuir o título mundial da variante de dropknee, dos troféus World Cup of Bodyboarding open, feminino e projunior, todos sancionados pela International Bodyboarding Corporation (IBC). Na Praia Grande, em Sintra, o evento conta com a participação de cerca de 100 atletas de 18 países tendo sido confirmadas já as presenças dos campeões mundiais Sammy Morretino (Havai), Dave Hubbard (Havai), Sari Ohhara (Japão), e dos ex-campeões mundiais Pierre-Louis Costes (França), Amaury Lavernhe (França), Alexandra Rinder (Canárias), Isabela Sousa (Brasil), e as portuguesas Joana Schenker e Teresa Almeida. A Câmara Municipal de Sintra associa-se, uma vez mais, à realização do Sintra Portugal Pro, considerado o mais antigo evento de desportos de ondas realizado em Portugal."
}
    
];

async function insert() {
    for( const event of arr) {
        await insertEvents(event);
    }
    closeConnection();
}

insert().then(() => console.log("done"));