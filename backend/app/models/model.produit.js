const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    prix: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    quantite: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    photo : {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    date : {
        type: Date,
        select: false,
        required: true,
        trim: true,
        default: Date.now,
    },
    idCategorie : {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
    idVendeur : {
        type: String,
        select: false,
        required: true,
        trim: true,
        minlength: 3
    },
},
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Client', ClientSchema);