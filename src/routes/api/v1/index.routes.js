// Import Section
import express from "express";
import tourRouter from "./tour.routes.js";
import userRouter from "./user.routes.js";

// Configuration Section
const router = express.Router();

// Middleware Section
router.use("/tours", tourRouter);
router.use("/users", userRouter);

// Export Section
export default router;
