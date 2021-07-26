const debug = require("debug")("lab4:model");
const mongo = require("mongoose");


let URI="mongodb+srv://shirmoriya:ACUa2ziP1yuGJXPe@clusterex4.qrrlf.mongodb.net/DeliveryProject?retryWrites=true&w=majority"
let db = mongo.createConnection();
(async () => {
    try {
        await db.openUri(URI);
    } catch (err) {
        debug("Error connecting to DB: " + err);
    }
})();
debug('Pending DB connection');

require("./Users")(db);
//require("./package")(db);
//require("./workSchedule")(db);

module.exports = model => db.model(model);


