const mongo = require("mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        title: { type: String, required: true },
        titleDescription: { type: String, required: true },
        // date: { type: Date, required: true },
        text: { type: String, required: true },
        // images: { type: Array }
    }, { autoIndex: true });


    schema.statics.CREATE = async function (post) {
        console.log("create \n");
        return this.create({
            title: post[0],
            titleDescription: post[1],
            // date: post[2],
            text: post[3],
            // images: post[4],
        });
    }


    db.model('blog', schema);
    console.log("blog model created");
};