//import connection
import db from "../config/database.js";

//get all products
export const getTest = (result) => {
  let sql = "SELECT * FROM test";
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
