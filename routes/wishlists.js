import express from 'express'
import { createWishlist, getWishlists, deleteWishlist } from '../controllers/wishlist.js'

const router = express.Router()

router.post('/', createWishlist)

router.get('/', getWishlists)

router.delete('/:id', deleteWishlist)

export default router
