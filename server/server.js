const express = require("express")
require("dotenv/config")
const path = require("path")
// const crypto = require("crypto")
const cors = require("cors")
const app = express()
const songController = require("./controllers/songController")
const userController = require("./controllers/userController")
// const assert = require("assert")
const mongoose = require("mongoose")
const morgan = require("morgan")
const rfs = require("rotating-file-stream")


const accessLogs = rfs.createStream("access.log", {
    interval: "1d",
    path: path.join(__dirname, "log"),
    
})


/*==============
MiddleWare
==============*/

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(fileUpload(
//     {createParentPath: true}   
// ))
app.use("/api", songController)
app.use("/api", userController)
app.use(morgan("combined", {stream: accessLogs}))

/*==============
Mongoose
==============*/
const uri = process.env.MONGODB_URI
const dbName = "LBX"

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName,
}

mongoose.connect(uri, options)
const db = mongoose.connection
db.on("error", (err) => console.log(err))
db.once("open", () => console.log(
        "\nConnected to mongoDB!\n"
    )

)

/*==============
server
==============*/


const PORT = 4000

app.listen(PORT, () => {
    console.log(`\nServer running on port ${PORT}!\n`)
})