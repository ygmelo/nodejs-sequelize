const express = require("express");
const helmet  = require("helmet");
const app     = express();
const port    = 3000;

const user = require("./user.js");
app.use(helmet());
app.use(express.json());

app.use("/user", user);

app.get("/", (req, res) => {
   res.send("index");
});

app.listen(port, _ => {
  console.log(`ON THE LINE LADRÃO => ${port}`);
});