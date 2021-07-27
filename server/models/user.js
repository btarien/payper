import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
      name: String
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true
    // },

    // password: {
    //   type: String,
    //   required: true
    // },
    // settings: {
    //   theme: {
    //     type: String,
    //     required: true,
    //     default: 'dark'
    //   },
    //   notifications: {
    //     type: Boolean,
    //     required: true,
    //     default: true
    //   },
    //   compactMode: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    //   }
    // }
  },
  { timestamps: true }
)

const User = mongoose.model("user", userSchema)

export default User