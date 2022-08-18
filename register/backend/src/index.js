const express = require('express')
const app = express()
const route = require('./routes')
const cookieParser = require('cookie-parser')
const cors = require('cors');


const db = require('./configs/db');
db.conect()

const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.urlencoded({extended: true}))
//middlewares
app.use(cookieParser())
app.use(express.json())


app.use(cors())


route(app)

const { PORT } = process.env


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
