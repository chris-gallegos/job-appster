const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    name: {type: String, required: true },
    position: String,
    company: String,
    location: String,
    status: { 
        type: String,
        enum: ['Pending', 'Declined', 'Interview']
    },
}, {
    timestamps: true
}
)



module.exports = mongoose.model('Job', jobSchema);