const mongo = require("mongoose");


module.exports = db => {
    // create a schema
    let schema = new mongo.Schema({
        from: { type: String, required: true },
        to: { type: String, required: true },
        msg: { type: String, required: true },
        date: { type: Date, required: true },
        uId: { type: String, required: true },
    }, { autoIndex: true });


    schema.statics.CREATE = async function (chatMsg) {
        console.log("create \n");
        return this.create({
            from: chatMsg[0],
            to: chatMsg[1],
            msg: chatMsg[2],
            date: chatMsg[3],
            uId: chatMsg[4],
        });
    }

    // schema.statics.REQUEST = async function () {
    //     console.log('I am in REQUEST function');
    //     // no arguments - bring all at once
    //     const args = Array.from(arguments); // [...arguments]
    //     if (args.length === 0) {
    //         //console.log("request: no arguments - bring all at once");
    //         return this.find({}, (err, res) => { }).select('-__v -_id').exec();
    //         // return this.find({}).select('-__v -_id -password');
    //         // return this.find({}, { "password": 0 }).exec();
    //     }

    //     // perhaps last argument is a callback for every single document
    //     let callback = arguments[arguments.length - 1];
    //     if (callback instanceof Function) {
    //         let asynch = callback.constructor.name === 'AsyncFunction';
    //         console.log(`request: with ${asynch ? 'async' : 'sync'} callback`);
    //         args.pop();
    //         let cursor, chat;
    //         try {
    //             cursor = await this.find(...args).select('-__v -_id').cursor();
    //         } catch (err) { throw err; }
    //         try {
    //             while (null !== (chat = await cursor.next())) {
    //                 if (asynch) {
    //                     try {
    //                         await callback(chat);
    //                     } catch (err) { throw err; }
    //                 }
    //                 else {
    //                     callback(chat);
    //                 }
    //             }
    //         } catch (err) { throw err; }
    //         return;
    //     }

    //     // request by id as a hexadecimal string
    //     if (args.length === 1 && typeof args[0] === "string") {
    //         console.log("request: by ID");
    //         return this.findById(args[0]).select('-__v -_id').exec();
    //     }

    //     // There is no callback - bring requested at once
    //     console.log(`request: without callback: ${JSON.stringify(args)}`)
    //     //console.log(await this.find(...args).exec());
    //     let cursor = await this.find(...args).select('-__v -_id').cursor();
    //     let result = [];
    //     while (null !== (chat = await cursor.next())) {
    //         result.push(chat);
    //         console.log("chat in REQUEST" + chat);
    //     }
    //     return result;
    // };

    schema.statics.REQUEST_BY_USER = async function (user) {
        console.log("in REQUEST_BY_USER");
        return this.find({ $or: [{ 'to': user }, { 'to': '*' }, { 'from': user }] }).select('-__v -_id')
    }
    schema.statics.DELETE_MSG = async function (uId) {
        // this.findOneAndRemove({ uId }, function (err, data) {
        console.log(uId)
        return this.findOneAndDelete({ 'uId': uId }, function (err, data) {
            // console.log(data)
            if (!err) {
                console.log("Deleted");
            }
        });

        console.log("in REQUEST_BY_USER");
        // return this.find({ $or: [{ 'to': user }, { 'to': '*' }, { 'from': user }] }).select('-__v -_id')
    }
    schema.statics.GET_MSG = async function ({ uId }) {
        // this.findOneAndRemove({ uId }, function (err, data) {
        // console.log(uId)
        return this.findOne({ 'uId': uId })
        //.select('from date').then(date => console.log(data))
        // this.find({ uId }, ['first', 'last'], function (err, docs) {
        //     cosnole.log(docs)
        // })

        // console.log("in REQUEST_BY_USER");
        // return this.find({ $or: [{ 'to': user }, { 'to': '*' }, { 'from': user }] }).select('-__v -_id')
    }

    db.model('chatMsg', schema);
    console.log("chatMsg model created");
};