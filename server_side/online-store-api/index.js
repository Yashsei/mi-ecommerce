const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3000;

// Permitir peticiones desde otras direcciones y leer JSON
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 8000 })
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.error("Error de conexión:", error.message));

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ success: true, message: "API working successfully", data: null });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

//Routes
app.use("/image/products", express.static("public/products"));
app.use("/image/category", express.static("public/category"));
app.use("/image/poster", express.static("public/posters"));