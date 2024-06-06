const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/App')
    .then(() => {
        console.log("database connected");
    },
        err => {
            console.log(err);
        }
    );

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    }

});

const UserData = mongoose.model('UserData', schema);

module.exports = UserData;