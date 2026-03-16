import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "provid name"] },
    email: { type: String, require: [true, "provid email"] },
    password: {
      type: String,
      unique: true,
      require: [true, "provid password"],
    },
    avatar: { type: String, default: "" },
    mobile: { type: Number, default: null },
    refresh_token: { type: String, default: "" },
    email_verify: { type: Boolean, default: false },
    last_login_date: { type: Date, default: "" },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Suspended"],
      default: "Active",
    },
    forgot_pass_opt: { type: String, default: null },
    forgot_pass_expire: { type: Date, default: "" },
    roll: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
