const mysql = require("mysql2");

class OpenConnection{
    constructor(){
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "admin",
            database: "CineCatalog"
        });
    };

    connect(){
        this.connection.connect(function(err){
            if (err){
                console.error(`Erro ao conectar no banco de dados: ${err}`)
            }
            else{
                console.log("Tudo Certo ;)")
            }
            
        });
    }

    end(){
        this.connection.end(function(err){
            if (err){
                console.error("Erro ao encerrar conexão ao BD :(")
            }
            else{
                console.log("Conexão encerrada")
            }
        });
    }

}
module.exports = OpenConnection;