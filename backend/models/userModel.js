//import connection
import db from "../config/database.js";

//get all products
export const getUsers = (result) => {
  let sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single product
export const getUserById = (id, result) => {
  db.query(
          "SELECT * FROM users WHERE user_id = ?",
          [id],
          (err, results) => {
            if (err) {
              console.log(err);
              result(err, null);
            } else {
              result(null, results[0]);
            }
          }
  );
};

// Update Product to Database
export const updateUserById = (data, id, result) => {
    db.query(
            "UPDATE users SET user_name = ?, user_phone = ?, user_img = ?, user_about = ? WHERE user_id = ?",
            [data.user_name, data.user_phone, data.user_img, data.user_about, id],
            (err, results) => {
                if (err) {
                    console.log(err);
                    result(err, null);
                } else {
                    result(null, results);
                }
            }
    );
};
