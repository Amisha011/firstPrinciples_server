const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const testimonialSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Photo: {
        type: String
    },
    Post: {
        type: String,
        required: true
    },
    TestimonialDescription:
    {
        type: String,
        required: true
    },
    Active:
    {
        type: Boolean,
        default: true
    }

},
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Testimonial", testimonialSchema);