const {Schema, model} = require('mongoose');

const facilitySchema = new Schema ({
    facility: String,
    description: String,
})

module.exports = model(
    'facility', facilitySchema
)