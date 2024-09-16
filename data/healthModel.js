import { Schema } from "mongoose";

const healthModel = new Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    bodyTemperature: {
      type: Number,
      required: true,
    },
    bloodPressure: {
      type: String,
      required: true,
    },
    heartRate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default healthModel;
