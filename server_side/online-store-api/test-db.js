require("dotenv").config();
const mongoose = require("mongoose");

console.log("Intentando conectar...");
mongoose
  .connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 8000 })
  .then(() => {
    console.log("OK: conectado a MongoDB");
    process.exit(0);
  })
  .catch((e) => {
    console.log("ERROR:", e.message);
    const servers = e.reason && e.reason.servers;
    if (servers) {
      for (const [name, s] of servers) {
        console.log(name, "->", s.error ? s.error.message : "sin detalle");
      }
    }
    process.exit(1);
  });