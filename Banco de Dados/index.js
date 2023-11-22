(async () => {
    const database = require('./db');
    try {
        await database.authenticate();
        console.log('A conexão foi bem sucedida!');
    } catch(error){
        console.error('Conexão falhou :( ', error );
    } 
    await database.close().then( () => {console.log("A conexão foi encerrada.")});
}) ();



