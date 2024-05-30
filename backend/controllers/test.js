import { getTest } from "../models/testModel.js";

// получить все заказы
export const showTest = (req, res) => {
  getTest((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
