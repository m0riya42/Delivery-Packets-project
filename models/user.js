const debug = require("debug")("lab4:model-user");
const mongo = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        Active: {type: Boolean, default: true, required: true},
        type: { type: String, enum: ["manager", "employee"] },
        id: {type: String, unique: true, required: true},
        fullName: {type: String, unique: true},
        userName: {type: String, unique: true, required: true},
        password: { type: String, unique: true, required: true },
        email: { type: String, unique: true },
        phone: { type: String, unique: true },

        workSchedule: { type: Array, required: false },
        
        address: {type: String, unique: true, required: true}

    }, { autoIndex: true });
    
};