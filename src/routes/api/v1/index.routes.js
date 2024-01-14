// Import Section
import express from "express";
import tourRouter from "./tour.routes.js";

// Configuration Section
const router = express.Router();

// Middleware Section
router.use("/tours", tourRouter);

// Export Section
export default router;
