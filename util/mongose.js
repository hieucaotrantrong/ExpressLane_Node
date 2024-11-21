module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());  // Convert mongoose documents to plain objects.
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};