import dotenv from 'dotenv'
import Services from '../models/Services.js'
import { db } from '../config/db.js'
import { payments } from './payments.js'

dotenv.config();
await db();
async function seedDB() {
    try {
        await Services.insertMany(payments);
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

async function clearDB() {
    try {
        await Services.deleteMany();
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if (process.argv[2] === '--import') {
    seedDB();
} else {
    clearDB();
}