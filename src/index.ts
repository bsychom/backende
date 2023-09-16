import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDb from './outils/ConnectDb';

dotenv.config();


const app = express()
const port = process.env.PORT || 8080
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  return res.send(' typescript server with express ')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.get('/user', (_req: Request, res: Response) => {
  return res.send('user 🏓')
})


app.listen(port, () => {
  ConnectDb();
  return console.log(`Server is listening on ${port}`)
})
