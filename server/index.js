const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
require("./utils/db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Awesome, now connecetd" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
