import { Tour } from "../../../models/tour.model.js";

export const getAllTours = (req, res) => {};
export const getTour = (req, res) => {};

export const createTour = async (req, res) => {
  /*
        Algorithm:

        1. Get all data from req.body
        2. Validate the required fields
        3. Validate the unique fileds
        4. Create the Tour
        5. Send the response
    
    */

  try {
    const { name, price, rating } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const existingTour = await Tour.findOne({ name });
    if (existingTour) {
      return res.status(400).json({
        success: false,
        message: "Tour already exists",
      });
    }

    const tour = await Tour.create({ name, price, rating });

    return res.status(201).json({
      success: true,
      message: "Tour created successfully",
      data: tour,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const updateTour = (req, res) => {};
export const deleteTour = (req, res) => {};
