const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Esterswag122",
    database: "task_manager"
})

connection.connect((err) => {
    if (err) {
        console.log("Erro ao conectar banco:", err)
    } else {
        console.log("Banco conectado")
    }
})

module.exports = connection
