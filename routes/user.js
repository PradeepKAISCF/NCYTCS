import express from 'express'

import {login,number,otpVerification} from '../controllers/auth.js'
import {updateChanelData,getAllChanels} from '../controllers/chanel.js'



const routes = express.Router();

routes.post('/login',login)
routes.post('/number',number)
routes.post('/otp',otpVerification)
routes.patch('/update/:id',updateChanelData)
routes.get('/getAllChanels',getAllChanels)

export default routes;
