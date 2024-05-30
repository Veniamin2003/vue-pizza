//import connection
import db from "../config/database.js";

//get all products
export const getReviews = (result) => {
  let sql = "SELECT * FROM reviews";
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
//insert product to databased
export const insertReview = (data, result) => {
  db.query("INSERT INTO reviews SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

