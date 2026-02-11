const tarefasModel = require("../models/tarefasModel")

exports.getTarefas = (req, res) => {
    tarefasModel.getAll((err, result) => {
        if (err) return res.status(500).json(err)
        res.json(result)
    })
}

exports.createTarefa = (req, res) => {
    tarefasModel.create(req.body, (err) => {
        if (err) return res.status(500).json(err)
        res.json({ mensagem: "Tarefa criada com sucesso!" })
    })
}

exports.updateTarefa = (req, res) => {
    tarefasModel.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json(err)
        res.json({ mensagem: "Tarefa atualizada com sucesso!" })
    })
}

exports.deleteTarefa = (req, res) => {
    tarefasModel.delete(req.params.id, (err) => {
        if (err) return res.status(500).json(err)
        res.json({ mensagem: "Tarefa deletada com sucesso!" })
    })
}
exports.updateTarefa = (req, res) => {

    tarefasModel.update(req.params.id, req.body, (err) => {

        if (err) return res.status(500).json(err)

        res.json({ mensagem: "Tarefa atualizada com sucesso!" })
    })

}
