import jwt from 'jsonwebtoken'
import userModel from '../models/user.model';
import dotenv from 'dotenv'

dotenv.config()

export const isAuthenticatedUser = async (req, res, next) => {
    try {
        const { token } = req.cookies; // কুকি থেকে টোকেন নেওয়া

        if (!token) {
            return res.status(401).json({ message: "প্রথমে লগইন করুন" });
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.userModel = await userModel.findById(decodedData.id);

        next(); // সব ঠিক থাকলে পরের ফাংশনে (Profile Controller) পাঠাবে
    } catch (error) {
        res.status(401).json({ message: "টোকেনটি সঠিক নয়" });
    }
};
