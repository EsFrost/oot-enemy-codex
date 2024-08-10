const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const monstersRouter = require('./routes/MonstersRouter')

app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.1.123:3000']
}))

const limiter = rateLimit({
    windowsMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)    
})

app.use(limiter)

app.use('/monsters', monstersRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})