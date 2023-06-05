import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: String,
    },
    thumbsUp: {
      type: Number
    },
    thumbsDown: {
      type: Number
    }
  },
  { versionKey: false }
);


export const User = mongoose.model("user", userSchema);
