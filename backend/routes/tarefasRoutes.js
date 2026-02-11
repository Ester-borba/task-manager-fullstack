const express = require("express")
const router = express.Router()

const tarefasController = require("../controllers/tarefasController")

router.get("/", tarefasController.getTarefas)
router.post("/", tarefasController.createTarefa)
router.put("/:id", tarefasController.updateTarefa)
router.delete("/:id", tarefasController.deleteTarefa)

module.exports = router
router.put("/:id", tarefasController.updateTarefa)
