const mongoose = require("mongoose");

const CauseSchema = new mongoose.Schema(
  {
    segment: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    target: {
      type: Number,
      required: true,
    }, 
    collected: {
      type: Number,
      required: true,
    }, 
    days: {
      type: Number,
      required: true,
    },
    mentor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
    },
    tasks: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cause", CauseSchema);