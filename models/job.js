const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    position: String,
    company: String,
    location: String,
    status: { 
        type: String,
        default: 'Pending',
    },
    date: { 
        type: String,
    }
}, {
    timestamps: true
}
)



module.exports = mongoose.model('Job', jobSchema);