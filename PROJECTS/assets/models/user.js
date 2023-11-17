//model me ham data kya kya user se chahiye wo likhte hai  


const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require:true,
    },
    name:{
        type:String,
        require:true
    }
},{
    timestamps: true
});

const user = mongoose.model('User', userSchema);

module.exports = user;