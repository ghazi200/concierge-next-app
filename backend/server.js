const serverless = require("serverless-http");
const express = require("express");
const path = require("path");

// Middleware
const logger = require(path.join(__dirname, "middleware", "logger"));

// Debugging
console.log("Logger Type:", typeof logger); // Should log "function"

const app = express();

// Global middleware
app.use(express.json());

// Ensure `logger` is a function
if (typeof logger !== "function") {
  console.error("❌ Logger is not a function! Check your middleware.");
  process.exit(1);
}
app.use(logger);

// Routes
const shiftsRouter = require(path.join(__dirname, "routes", "shifts"));

// Debugging
console.log("Shifts Router Type:", typeof shiftsRouter); // Should log "object"

app.use("/shifts", shiftsRouter);

// Serve static files (if applicable)
app.use(express.static(path.join(__dirname, "../frontend")));

// Export for AWS Lambda
module.exports.handler = serverless(app);

// Local development server
if (process.env.NODE_ENV === "development") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}