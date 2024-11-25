const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);



const Course = new Schema({
    name: { type: String, default: '', required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    slug: { type: String, default: '???', slug: 'name', unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);

