import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

// route imports
import badgesRouter from './routes/badges.mjs'
import tasksRouter from './routes/tasks.mjs'
import authRouter from './routes/auth.mjs'

const app = express()
dotenv.config({ silent: true })
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }))
app.use(cors())

// middleware to parse JSON bodies
app.use(express.json())

// middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.use('/', badgesRouter)
app.use('/', tasksRouter)
app.use('/', authRouter)

/*
app.post('/newtask', async(req, res) => {
    name:req.body
})

app.post('/edittask', async(req, res) => {

})

*/
export default app
