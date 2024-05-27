import Services from '../models/Services.js';
const getTypesPayments = async (req, res) => {
    try {
        const services = await Services.find();
        res.json(services);
    } catch (error) {
        console.log(error);
    }
}

export { getTypesPayments }