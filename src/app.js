const express = require("express");
const healthRouter = require("./routes/health");
const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(express.json());

app.use("/health", healthRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
