'use strict';
exports.main = (event, context, callback) => {
    console.log(event)
    console.log(context)
    callback(null, event);
};
