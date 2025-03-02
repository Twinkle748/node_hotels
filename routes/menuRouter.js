import express from 'express';
const router = express.Router();
import menuItem from '../models/menuItem.js';

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newMenuItem = new menuItem(data);
        const savedMenuItem = await newMenuItem.save();
        console.log("✅ Data saved successfully:", savedMenuItem);
        res.status(200).json(savedMenuItem);
    }
    catch{
        console.log("❌ Error saving menu item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/',async(req,res)=>{
    try{
        const data = await menuItem.find();
        console.log("data fetched successfully",data);
        res.status(200).json(data);
    }catch(error){
        console.log("❌ Error fetching menu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/:taste',async(req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste == "spicy" || taste == "sweet" || taste == "sour" || taste == "bitter"){
            const response = await menuItem.find({taste: taste});
            console.log("response fetched",response);
            res.status(200).json(response);
        }else{
            res.status(400).json({error:"Invalid taste"});
        }
    }catch(error){
        console.log("❌ Error fetching menu:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
