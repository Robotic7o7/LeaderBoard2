const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    rating:String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);