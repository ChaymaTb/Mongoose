const mongoose = require(('mongoose'))
const URI = process.env.MONGO_URI

require('dotenv').config()

const Db_connect = async() => {
    try { await mongoose.connect(URI);
        console.log('Database is connected')
    }
    catch(error){
        console.log(error)
    }
}

module.exports = Db_connect