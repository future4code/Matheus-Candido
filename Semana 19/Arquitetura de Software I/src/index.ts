import express from 'express'
import cors from 'cors'
import createUser from './controller/createUser'
import login from './controller/login'
import deleteUser from './controller/deleteUser'
import getUsers from './controller/getAllUsers'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/user/signup', createUser)
app.post("/user/login", login)
app.get('/user/all', getUsers)

app.delete('/user/delete/:id', deleteUser)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})