import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { config } from 'dotenv'; config()

const app = express()
const port = process.env.PORT || 4005
app.set('port', port)
cors()
morgan('dev')
app.use(express.json())


app.get('/api', (_, res:Response) => {
    res.json({msg:'ok'})
})


;(() => {
    const server = app.listen(port)
    if (server) console.log(`\n\nListening on port ${port}`)
})()

console.log("hi hilknksdfsdfd")
