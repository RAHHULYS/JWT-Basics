import express from 'express'

import { login, dashboard } from '../controllers/main.js'

const app = express();

import { authenticationMiddleware } from '../middleware/auth.js';


app.route('/dashboard').get(authenticationMiddleware,dashboard)
app.route('/login').post(login)

export default app