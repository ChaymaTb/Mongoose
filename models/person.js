const mongoose = require("mongoose")
const schema = mongoose.Schema;


const personSchema = new schema({
    name: String,
    age: String,
    favoriteFood : Array
});

const Person = mongoose.model('person', personSchema);

module.exports = Person;