// import router from './routes/todo.route.js';
import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import cors from 'cors'
// import connectDB from './db/db.mongoose.js';
// import bodyParser from 'bo'
dotenv.config()


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define the Registration Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  qualification: { type: String, required: true },
  address: { type: String, required: true },
});

const Registration = mongoose.model("Registration", userSchema);

// API endpoints

// Register new user
app.post("/api/register", async (req, res) => {
  const { name, mobile, lastName, email, gender, qualification, address } = req.body;

  if (!name || !mobile || !lastName || !email || !gender || !qualification || !address) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newUser = new Registration(req.body);
    await newUser.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error("Error in /api/register:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all users
app.get("/api/user", async (req, res) => {
  try {
    const users = await Registration.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get user by ID
app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await Registration.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update specific user details
app.patch("/api/user/:id", async (req, res) => {
  try {
    const updatedUser = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update entire user details (overwrite)
app.put("/api/user/:id", async (req, res) => {
  try {
    const updatedUser = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User updated successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete user by ID
app.delete("/api/user/:id", async (req, res) => {
  try {
    const deletedUser = await Registration.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
res.send("Hello World")
})

// Start the server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
