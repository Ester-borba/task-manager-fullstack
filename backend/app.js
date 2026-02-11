const express = require("express")
const cors = require("cors")

const tarefasRoutes = require("./routes/tarefasRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
   res.send("API Task Manager Online 🚀")
})

app.use("/tarefas", tarefasRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor rodando...")
})
