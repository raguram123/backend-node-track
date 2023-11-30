import mongoose from "mongoose"

const PurchaseSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    QuantityPurchased: {
      type: Number,
      required: true,
    },
    PurchaseDate: {
      type: String,
      required: true,
    },
    TotalPurchaseAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const purchase = mongoose.model("purchase", PurchaseSchema);
module.exports = purchase;