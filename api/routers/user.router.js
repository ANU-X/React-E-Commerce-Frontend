import { Router } from 'express';
import {registerUser, loginUser }from '../controllers/user.controller.js'
// import {isAuthenticatedUser} from '../middleware/authMiddleware.js'

const userRouter = Router()

userRouter.post('/reg', registerUser )
userRouter.post('/login', loginUser)
// userRouter.get('/logout', logoutUser)
// userRouter.get('/me', getUserDetails, isAuthenticatedUser)


export default userRouter
