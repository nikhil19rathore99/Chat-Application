const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is started");
});

module.exports = router;
