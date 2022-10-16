const Events= require("../models/events.js");

module.exports =class API{

    // fetch all events
    static async fetchAllEvents(req, res){

        try {
            const events = await Events.find();
            res.status(200).json(events);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
        
    }

    static async fetchEventbyid(req, res){

        const id=req.params.id;

        try {
            const events = await Events.findById(id)
            res.status(200).json(events);
        } catch (err) {
            res.status(404).json({message: err.message});
        }
        
    }

    // create event
    static async createEvents(req, res){
        const event=req.body;

        try {
            await Events.create(event);
            res.status(201).json({message:"Event created successfully!"});
            
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }

    // updatate event
    static async updateEvents(req, res){
        const id=req.params.id;
        const newEvent=req.body;
        
        try {
            await Events.findByIdAndUpdate(id, newEvent);
            res.status(200).json({message:"event updated"});
            
        } catch (err) {
            res.status(404).json({message: err.message});
        }
    }

    // delete event
    static async deleteEvents(req, res){
        const id=req.params.id;

        try {
            await Events.findByIdAndDelete(id);
            res.status(200).json({message:"event deleted"});
        } catch (err) {
            res.status(404).json({message: err.message});
        }

    }



};

