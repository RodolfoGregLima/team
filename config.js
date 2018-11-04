// Aqui fica a configuração com o banco de dados
var config = {
    user: 'bandtec',
    password: '',
    server: 'insensorserver.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'IncubadorasDB',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

module.exports = config;