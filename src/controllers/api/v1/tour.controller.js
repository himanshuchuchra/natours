import { Tour } from "../../../models/tour.model.js";

export const getAllTours = async (req, res) => {
  /*
      Algorithm:

      1. Find all tours from database
      2. Check if atleast one tour exists
      3. Send the response
        
    */

  try {
    const tours = await Tour.find();

    if (tours.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No tours exists",
      });
    }

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
    const {
      name,
      price,
      duration,
      maxGroupSize,
      difficulty,
      summary,
      coverImage,
    } = req.body;

    if (
      !name ||
      !price ||
      !duration ||
      !maxGroupSize ||
      !difficulty ||
      !summary ||
      !coverImage
    ) {
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

    const tour = await Tour.create(req.body);

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
        runValidators: true,
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

export const deleteTour = async (req, res) => {
  /*
      Algorithm:

      1. Get the path data from params
      2. Validate path data is not empty
      3. Delete the tour
      4. Validate the tour is present
      4. Send the response
        
    */

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide path in the URL",
      });
    }

    const tour = await Tour.findByIdAndDelete(id);
    if (!tour) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid path",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tour deleted successfully",
      data: tour,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
