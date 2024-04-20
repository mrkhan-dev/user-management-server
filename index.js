const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello users");
});

app.listen(port, () => {
  console.log(`This server is running on port ${port}`);
});
