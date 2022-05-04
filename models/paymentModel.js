const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: [true, "Card Number cannot be blank"],
    maxlength: [16, "Not More than 16 characters long"],
  },
  expirationDate: {
    type: String,
    required: [true, "Expiry Date cannot be blank"],
  },
  cvv: {
    type: String,
    required: [true, "CVV Number cannot be blank"],
    maxlength: [3, "Not More than 3 characters long"],
  },
  amount: {
    type: String,
    required: [true, "Amount cannot be blank"],
  },
});

module.exports =
  mongoose.models.paymentModel || mongoose.model("paymentModel", paymentSchema);
