import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDb from './outils/ConnectDb';
import userModel from './Models/userModel';
import allUsers from './outils/allUsers';

dotenv.config();


const app = express()
const port = 5000;
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  return res.send(' typescript server with express ')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.get('/users', async (req : Request, res : Response) => {
  const users = await userModel.find();
  const ret = async () =>{
    return await allUsers(users);
  }
  
  return  res.json(ret);
})

app.get('/user', (_req: Request, res: Response) => {
  return res.send('user 🏓')
})


app.listen(port, () => {
  ConnectDb();
  return console.log(`Server is listening on ${port}`)
})
