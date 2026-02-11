const db = require("../db")

exports.getAll = (callback) => {
    db.query("SELECT * FROM tarefas", callback)
}

exports.create = (dados, callback) => {
    db.query(
        "INSERT INTO tarefas (titulo, descricao, status) VALUES (?, ?, ?)",
        [dados.titulo, dados.descricao, dados.status],
        callback
    )
}

exports.update = (id, dados, callback) => {
    db.query(
        "UPDATE tarefas SET titulo=?, descricao=?, status=? WHERE id=?",
        [dados.titulo, dados.descricao, dados.status, id],
        callback
    )
}

exports.delete = (id, callback) => {
    db.query("DELETE FROM tarefas WHERE id=?", [id], callback)
}
