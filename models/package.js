const debug = require("debug")("lab4:model-user");
const mongo = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        Active: {type: Boolean, default: true, required: true},
        id: {type: String, unique: true, required: true},
        fullName: {type: String, unique: true},
        email: { type: String, unique: true },
        phone: { type: String, unique: true },
        address: {type: String, unique: true, required: true},

        //package: { type: String, enum: ["", "", ""] },

        packageArrived: {type: Boolean, default: false, required: true},

        //deliveryDay: {  $range: [ 1, 29 ] },
        
    }, { autoIndex: true });

    db.model('Package', schema);
    
};