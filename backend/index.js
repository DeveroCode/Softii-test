import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

// call to dotenv
dotenv.config();
const app = express();
db();
// cors
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (whiteList.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}
app.use(cors(corsOptions));
// Ready the body of the request
app.use(express.json());
app.use('/api/services', servicesRoutes);
// Define port
const PORT = process.env.PORT || 4000;
// Run the app
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});