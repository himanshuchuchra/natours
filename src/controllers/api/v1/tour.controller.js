import { Tour } from "../../../models/tour.model.js";

export const getAllTours = async (req, res) => {
  /*
      Algorithm:

      1. Find all tours from database
      2. Send the response
        
    */

  try {
    const tours = await Tour.find();

    return res.status(200).json({
      success: true,
      results: tours.length,
      data: tours,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const getTour = async (req, res) => {
  /*
      Algorithm:

      1. Get the path data from params
      2. Validate params is not empty
      3. Find the data from database
      4. Validate the data is present
      5. Send the response
        
    */

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide path in the URL",
      });
    }

    const tour = await Tour.findById(id);

    if (!tour) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid path",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tour fetched successfully",
      data: tour,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

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

export const updateTour = async (req, res) => {
  /*
      Algorithm:

      1. Get the path data from params
      2. Validate path data is not empty
      3. Get all data from req.body
      4. Validate there is atleast one filed to update
      5. Validate if unique filed is updated
      6. Update the tour
      7. Send the response
        
    */

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide path in the URL",
      });
    }

    const { name, price, rating } = req.body;

    if (!name && !price && !rating) {
      return res.status(400).json({
        success: false,
        message: "Please provide atleast one field to update",
      });
    }

    if (name) {
      const existingTour = await Tour.findOne({ name });
      if (existingTour) {
        return res.status(400).json({
          success: false,
          message: "Tour name is already taken, Please enter another name",
        });
      }
    }

    const tour = await Tour.findByIdAndUpdate(
      id,
      {
        name,
        price,
        rating,
      },
      {
        new: true,
      }
    );

    if (!tour) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid path",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tour updated successfully",
      data: tour,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const deleteTour = (req, res) => {};
