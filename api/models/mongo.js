const mongo = require("mongoose");
const apiKeys = require("../../api-keys")
let URI = apiKeys.mongoDB;

let db = mongo.createConnection(mongoDB);
db.on('open', function () { console.log("On open DB") });
db.on('error', function () { console.log("Error connecting to DB") });
db.on('connecting', () => { console.log('On connecting to MongoDB: '); });
db.on('connected', () => { console.log('On connected to MongoDB: '); });
db.on('disconnecting', () => { console.log('On disconnecting to MongoDB: '); });
db.on('disconnected', () => { console.log('On disconnected to MongoDB: '); });
db.on('reconnected', () => { console.log('On reconnected to MongoDB: '); });
db.on('error', err => { console.log('On error to MongoDB: ' + err); });
db.on('close', () => { console.log('On MongoDB close: '); });
console.log('Pending DB connection');

db.then(async db1 => {
    let Test = db.model("Test", new mongo.Schema({}), "Empties");
    // await Test.create({});
    // let tests = await Test.find({}).exec();
    let close = db1.close();
    await close;
});
