const express = require("express");
const router = express.Router();

const tasks = [
  { id: 1, title: "Set up project", done: true },
  { id: 2, title: "Write tests", done: false },
  { id: 3, title: "Deploy to staging", done: false },
];

router.get("/", (req, res) => {
  // BUG: 'filteredTasks' is never defined — should be 'tasks'
  const result = filteredTasks.filter((t) => !t.done);
  res.json(result);
});

router.get("/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

module.exports = router;
