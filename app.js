const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db"); // Database connection
const miniRouter = require("./routes/mini"); // Mini projects
const majorRouter = require("./routes/major"); // Major projects
const bookingRouter = require("./routes/Booking"); // Booking

const app = express();

app.use(cors()); 
app.use(express.json());

connectDB();

app.use("/api", miniRouter);
app.use("/api", majorRouter);
app.use("/api", bookingRouter);

// Handle 404
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

// Handle 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server Error" });
});

// Start server
app.listen(5000, () => console.log('Server running on port 5000.'));
