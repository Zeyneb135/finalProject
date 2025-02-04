import express, { Router } from 'express' 
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js'
import { verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/checkauthentication', verifyToken, (req,res,next) => {
    res.send('you are logged in')
})

router.get('/checkuser/:id', verifyUser, (req,res,next) => {
    res.send('you are logged in if you want you can deleted your account')
})
//update
router.put('/:id', updateUser)
//delete
router.delete('/:id', deleteUser)
//get
router.get('/:id', getUser)
//get all
router.get('/', getUsers)


export default router