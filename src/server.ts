require("dotenv/config")
require("express-async-errors")

import { Express, Request, Response, NextFunction } from "express"
import { AppError } from "./utils/AppError";

const express = require("express");
const routes = require("./routes/index");

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.use((error: Error | AppError, request: Request, response: Response, next: NextFunction) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})


app.listen(port, () => console.log(`Server running on port ${port} 🖥`));