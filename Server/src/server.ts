import 'dotenv/config'
import jwt from '@fastify/jwt'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './Routes/memories'
import { authRoutes } from './Routes/auth'

const app = fastify()
app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server runing on http://localhost:3333')
  })
