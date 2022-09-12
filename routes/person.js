const express = require('express');
const personRouter = express.Router();
const Person = require('../models/person')

// create a person and save it
personRouter.post('/add', async (req, res) => {
    try {
        const newPerson = new Person(req.body)
        let result = await newPerson.save();
        res.send(result)
    }
    catch (error) {
        console.log(error);
    }
})

//create many person
personRouter.post('/addmany', (req, res) => {
    Person.insertMany(req.body).then((person) => {
        res.send(person);
    }).catch
        ((error) => {
            res.send(error);
        })
})

// get all person
personRouter.get("/", async(req, res) => {
    try {
        let result = await Person.find();
        res.send({
            persons: result, msg: "all persons"
        });
    } catch (error) {
        console.log(error);
    }
})

// get one person by id
personRouter.get("/:id", async(req, res) => {
    try {
        const id = req.params;
        let result = await Person.find({ _id: id});
        res.send({
            persons: result, msg: "person"
        });
    } catch (error) {
        console.log(error);
    }
})

//update person
personRouter.put("/:id",async(req,res)=>{
    try{
        let result = await Person.findOneAndUpdate({
            id :req.params.id,
            $set : { ...req.body},
        });
        res.send({newPerson:result, msg:"updated person"})
    } catch(error) {
        console.log(error)
    }
})

//delete person
personRouter.delete("/:id",async(req,res)=>{
    try{
        let result = await Person.findOneAndRemove({
            id :req.params.id,
        });
        res.send({msg:"deleted person"})
    } catch(error) {
        console.log(error)
    }
})

module.exports = personRouter;