import mongoose from 'mongoose';

const servicesSchema = mongoose.Schema({
    name: {
        type: String,
        requred: true,
        trim: true
    }
});


const Services = mongoose.model('Services', servicesSchema);
export default Services;