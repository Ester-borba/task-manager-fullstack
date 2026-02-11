const tarefasModel = require("../models/tarefasModel")

exports.getTarefas = async (req, res) => {
  const tarefas = await tarefasModel.getAll()
  res.json(tarefas)
}

exports.createTarefa = async (req, res) => {
  await tarefasModel.create(req.body)
  res.json({ mensagem: "Tarefa criada!" })
}

exports.updateTarefa = async (req, res) => {
  await tarefasModel.update(req.params.id, req.body)
  res.json({ mensagem: "Tarefa atualizada!" })
}

exports.deleteTarefa = async (req, res) => {
  await tarefasModel.delete(req.params.id)
  res.json({ mensagem: "Tarefa deletada!" })
}
