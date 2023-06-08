const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const port = require('./config/port');
const connectToMongoDB = require('./config/database');
const initializeRoutes = require('./api/allRoutes');
const cors = require('cors');
const morgan = require('morgan');
// const multer = require('./config/multerconfig');

dotenv.config({ path: path.join(__dirname, 'config', '.env') });

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// app.use(multer.single('myFile'));

connectToMongoDB();



const routes = initializeRoutes();
app.use('/api', routes);

app.listen(port, () => {
  console.log('Node server started on port', port);
});















// const express = require('express');
// const dotenv = require('dotenv');
// const path = require('path');
// const port = require('./config/port');
// const connectToMongoDB = require('./config/database');
// const initializeRoutes = require('./api/allRoutes');
// const cors = require('cors');
// const morgan = require('morgan');
// // const multer = require('multer');

// dotenv.config({ path: path.join(__dirname, 'config', '.env') });

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(morgan('tiny'));

// connectToMongoDB();
// const upload = require("./upload")
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, path.join(__dirname, 'public', 'images')); // Specify the destination folder for uploaded images
// //   },
// //   filename: function (req, file, cb) {
// //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
// //     const filename = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
// //     cb(null, filename);
// //   }
// // });

// // const upload = multer({ storage: storage });

// const routes = initializeRoutes(upload); // Pass the upload middleware to the initializeRoutes function
// app.use('/api', routes);

// app.listen(port, () => {
//   console.log('Node server started on port', port);
// });











































// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const path = require("path");
// const mongoose = require("mongoose");

// dotenv.config({ path: path.join(__dirname, "config", ".env") });

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(morgan("tiny"));

// // Connect to MongoDB database
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error);
//   });

// app.use("/api/brands", require("./api/brands/brand.routes"));


// const port = 3001;
// app.listen(port, () => {
//   console.log("Node server started on port", port);
// });


