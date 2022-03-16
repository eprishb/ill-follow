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
const multer = require("multer");
const path = require("path");

dotenv.config();

// Connect to MongoDB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// Bypass requests and go to images directory
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '--' + file.originalname);
	}
})

const upload = multer({ storage });
app.post('/api/single', upload.single('file'), (req, res) => {
	try {
		return res.status(200).json('Single file uploaded');
	} catch(err) {
		console.log(err);
	}
})
app.post('/api/multiple', upload.array('files', 3), (req, res) => {
	try {
		return res.status(200).json('Multiple files uploaded');
	} catch(err) {
		console.log(err);
	}
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// Port to listen to while running
app.listen(8800, () => {
	console.log("Backend server is running!")
})