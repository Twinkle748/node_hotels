import express from 'express';
const router = express.Router();
import Person from '../models/persons.js';
// router.get('/', (req, res) => {
//     res.send("Welcome to the hotel. How can I help you? We have a list of menus.");
// });

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const savedPerson = await newPerson.save();
        console.log("✅ Data saved successfully:");
        res.status(200).json(savedPerson);
    } catch (error) {
        console.log("❌ Error saving person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personID = req.params.id;
        const deltedPerson = await Person.findByIdAndDelete(personID);
        if (!deltedPerson) {
            return res.status(404).json({ error: "Person not found" }); 
        }
        console.log("✅ Data deleted successfully:", deltedPerson);
        res.status(200).json(deltedPerson);
    } catch (error) {
        console.log("❌ Error deleting person:", error);    
        res.status(500).json({ error: "Internal server error" });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const personid = req.params.id;

        // Validate ObjectId format before proceeding
        // if (!mongoose.Types.ObjectId.isValid(personid)) {
        //     return res.status(400).json({ error: "Invalid ID format" });
        // }

        const updateddata = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(
            personid, 
            updateddata,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }

        console.log("✅ Data updated successfully:", updatedPerson);
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.log("❌ Error updating person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log("data fetched successfully",data);
        res.status(200).json(data);
    }catch(error){
        console.log("❌ Error fetching person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "Chef" || workType == "Waiter" || workType == "Manager") {
            const response = await Person.find({ work: workType }); // ✅ Corrected syntax
            console.log("response fetched", response);
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: "Invalid work type" });
        }
    } catch (error) { // ✅ Added error parameter
        console.log("❌ Error fetching person:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;