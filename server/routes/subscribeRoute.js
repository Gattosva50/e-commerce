import express from 'express';
import Suscriber from '../models/Suscriber.js';

const router = express.Router();

// @route POST /api/subscriber
// @desc Handle newsletter subscription
// @access Public 

router.post("/", async(req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(404).json({message: "Email is required" })
    };

    try {
        let subscriber = await Suscriber.findOne({email});

        if(subscriber){
            return res.status(400).json({message: "Email is already subscribed"});
        };

        // Create a new subscriber
        subscriber = new Suscriber({email});
        await subscriber.save();
        res.status(201).json({message: "Successfully subscribed to the newsletter!"})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error."})
        
    }
});

export default router;