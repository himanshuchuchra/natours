// Import Section
import mongoose from "mongoose";

// Model Schema Section
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name."],
      unique: [true, "A tour must be unique."],
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price."],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

// Create and Export Model
export const Tour = mongoose.model("Tour", tourSchema);
