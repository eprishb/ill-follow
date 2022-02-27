// Creates Express
const express = require("express");
// Creates Application
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Connect to MongoDB
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL, () => {
		console.log('Connected to MongoDB');
	});
}

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// Port to listen to while running
app.listen(8800, () => {
	console.log("Backend server is running!")
})