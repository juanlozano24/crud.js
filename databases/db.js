const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'ejemplo_db',
    user: 'root',
    password: 'Juan1234.',
    insecureAuth: true
})

conexion.connect((error)=>{
    if (error){
        console.error('el error de la conexion es: ' +error);
        return
    }
    console.log('conectado a la bd');
    
})

module.exports = conexion;