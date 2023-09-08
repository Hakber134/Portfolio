import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    unique: true,
    required: [true, "Please enter email"],
  },

  password: {
    type: String,
    required: [true, "Please enter password"],
    select: false,
  },

  skills: {
    image1: {
      public_id: String,
      url: String,
    },

    image2: {
      public_id: String,
      url: String,
    },

    image3: {
      public_id: String,
      url: String,
    },

    image4: {
      public_id: String,
      url: String,
    },

    image5: {
      public_id: String,
      url: String,
    },

    image6: {
      public_id: String,
      url: String,
    },
  },

  project: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],
});

export const User = mongoose.model("User", userSchema);
