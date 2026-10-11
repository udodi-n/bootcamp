import express from "express"
import { choices } from "./choice-weight.js"
import { getSet } from './return.js'
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: "*"
}))
app.use(express.json())

app.post('/api/score', async (req, res) => {
    console.log("hi")
    console.log(req.body)
    const result = await getSet(req.body)
    res.send(result)
})

app.get('/api/ping', (req, res) => {
    res.send("pong")
})

app.listen(PORT, (req, res) => {
    console.log(`server running on PORT ${PORT}`)
})