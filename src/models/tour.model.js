// Import Section
import mongoose from "mongoose";

// Model Schema Section
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: [true, "A tour must be unique"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    discount: {
      type: Number,
    },
    duration: {
      type: Number,
      required: [true, "A tour must have durations"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have maximum group size"],
    },
    difficulty: {
      type: String,
      required: [true, "A tour must have a difficulty level"],
      trim: true,
    },
    startDates: [
      {
        type: Date,
      },
    ],
    summary: {
      type: String,
      required: [true, "A tour must have a description"],
      trim: true,
    },
    coverImage: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: [
      {
        type: String,
      },
    ],
    ratingsAverage: {
      type: Number,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Create and Export Model
export const Tour = mongoose.model("Tour", tourSchema);
