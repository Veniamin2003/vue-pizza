import { getReviews, insertReview } from "../models/reviewModel.js";

// получить все заказы
export const showReviews = (req, res) => {
  getReviews((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
//create new product
export const createRewiew = (req, res) => {
  const data = req.body;
  insertReview(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
