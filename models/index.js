const debug = require("debug")("lab4:model");
const mongo = require("mongoose");


let URI=""
let db = mongo.createConnection();
(async () => {
    try {
        await db.openUri(URI);
    } catch (err) {
        debug("Error connecting to DB: " + err);
    }
})();
debug('Pending DB connection');

require("./user")(db);
require("./customers")(db);

module.exports = model => db.model(model);
