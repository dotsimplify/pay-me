import databaseConnect from "../../connection/databaseConnect";
import paymentModel from "../../models/paymentModel";

databaseConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const transactions = await paymentModel.find({});

        res.status(200).json({ success: true, data: transactions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const transaction = await paymentModel.create(req.body);
        res.status(201).json({ success: true, data: transaction });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
