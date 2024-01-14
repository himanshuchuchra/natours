// Import Section
import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../../../controllers/api/v1/user.controller.js";

// Configuration Section
const router = express.Router();

// Routes Section
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

// Export Section
export default router;
