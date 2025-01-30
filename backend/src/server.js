import router from './routes/todo.route.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './db/db.mongoose.js';
dotenv.config()

const app = express()
connectDB()

app.use("/",router)
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log(`server started on http://localhost:${PORT}` );
    
})