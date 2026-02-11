const db = require("../db")

exports.getAll = async () => {
  const res = await db.query("SELECT * FROM tarefas ORDER BY id DESC")
  return res.rows
}

exports.create = async (dados) => {
  await db.query(
    "INSERT INTO tarefas (titulo, descricao, status) VALUES ($1,$2,$3)",
    [dados.titulo, dados.descricao, dados.status]
  )
}

exports.update = async (id, dados) => {
  await db.query(
    "UPDATE tarefas SET titulo=$1, descricao=$2, status=$3 WHERE id=$4",
    [dados.titulo, dados.descricao, dados.status, id]
  )
}

exports.delete = async (id) => {
  await db.query("DELETE FROM tarefas WHERE id=$1", [id])
}
