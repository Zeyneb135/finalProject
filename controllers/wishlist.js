import Wishlist from "../models/Wishlist.js"

export const createWishlist = async (req, res, next) => {
    const { name, type, city } = req.body;

    try {
        const existingWishlist = await Wishlist.findOne({ name, type, city });

        if (existingWishlist) {
            return res.status(400).json({ message: 'Bu məhsul artıq wishlist-ə əlavə edilib!' });
        }

        const newWishlist = new Wishlist(req.body);
        const savedWishlist = await newWishlist.save();
        res.status(200).json(savedWishlist);
    } catch (error) {
        next(error);
    }
}

export const getWishlists = async (req, res, next) => {
    try {
        const wishlists = await Wishlist.find()
        res.status(200).json(wishlists)
    } catch (error) {
        next(error)
    }
}

export const deleteWishlist = async (req, res, next) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id)
        res.status(200).json('Item has been removed from wishlist')
    } catch (error) {
        next(error)
    }
}
