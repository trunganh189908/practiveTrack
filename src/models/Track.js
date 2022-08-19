const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    tinmestamp: Number,
    coords: {
        latitude: Number,
        longitute: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number

    }
})

const trackSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name:{
        type: String,
        default: ''
    },
    location: [pointSchema]
});

mongoose.model('Track', trackSchema);