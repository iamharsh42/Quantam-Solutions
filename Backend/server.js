const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://Blade:Blade69@bladecluster.93kuisj.mongodb.net/Quant?retryWrites=true&w=majority"
);

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT})`));
