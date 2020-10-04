
module.exports = {
    user: 'sa',
    password: 'BVC12345',
    server: 'ACERLAPTOP\\SQLEXPRESS',
    //database: 'AP'
    database: 'Eval',
    port: 1433,
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

console.log("Connected to Database");
