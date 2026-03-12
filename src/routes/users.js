const express = require("express");
const router = express.Router();
const { validateEmail, validateUsername } = require("../utils/validate");

const users = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

router.post("/", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ error: "username and email are required" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (!validateUsername(username)) {
    return res.status(400).json({ error: "Invalid username format" });
  }

  const user = { id: nextId++, username, email };
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;
