// Import Section
import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
} from "../../../controllers/api/v1/tour.controller.js";

// Configuration Section
const router = express.Router();

// Routes Section
router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

// Export Section
export default router;
