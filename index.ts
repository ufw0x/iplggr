import express, { type Application, type Request, type Response } from "express"
import cors from "cors"
import helmet from "helmet"
import { router } from "./router/router"
import {config} from "dotenv"

config()

export const app:Application = express()
const port:number = parseInt(process.env.port || "8080")

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, ()=>{
  console.log(`Gerrrrr! : ${port}`)
})
