const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name of the medicine"],
      maxLength: [40, "Name cannot exceed 40 characters"],
      minLength: [3, "Name should atleast have 3 characters"],
    },
    expiryDate: {
      type: Date,
      required: [true, "Please enter expiry date of the medicine"],
    },
    condition: {
      type: String,
      required: [true, "Please enter condition of the medicine"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter quantity of the medicine"],
    },
    image: {
      type: String,
      required: [true, "Please enter image of the medicine"],
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "donorType",
    },
    donorType: {
      type: String,
      enum: ["user", "organization"],
      default: "user",
      required: true,
    },
    note: {
      type: String,
    },
    status: {
      type: String,
      enum: ["available", "booked", "listed"],
      default: "listed",
    },
    bookedQuantity: {
      type: Number,
      default: 0,
    },
    availableQuantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Method to update the available and booked quantity of the medicine
medicineSchema.methods.updateQuantity = function (quantity) {
  this.availableQuantity = this.quantity - this.bookedQuantity;
  if (quantity > this.availableQuantity) {
    throw new Error("Requested quantity exceeds available quantity");
  }
  this.bookedQuantity += quantity;
  return this.save();
};

medicineSchema.pre("save", function (next) {
  this.availableQuantity = this.quantity - this.bookedQuantity;
  next();
});
module.exports = mongoose.model("Medicine", medicineSchema);
