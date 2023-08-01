require("dotenv/config")

import { Express, Request, Response, NextFunction } from "express"

const express = require("express")


const app: Express = express()
const port = process.env.PORT || 3333

app.use(express.json())


app.listen(port, () => console.log(`Server running on port ${port} 🖥`))