//import connection
import db from "../config/database.js";

//get all products
export const getOrders = (result) => {
  let sql = 'SELECT order_id, product_name, user_name, order_address, order_date, order_status, order_pay_type FROM orders INNER JOIN products ON orders.order_id = products.product_id INNER JOIN users ON orders.user_id = users.user_id';
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
export const getOrderById = (id, result) => {
  db.query(
    "SELECT * FROM orders WHERE order_id = ?",
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

//insert product to databased
export const insertOrder = (data, result) => {
  db.query("INSERT INTO orders SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product to Database
export const updateOrderById = (data, id, result) => {
  db.query(
    "UPDATE orders SET order_name = ?, order_price = ? WHERE order_id = ?",
    [data.order_name, data.order_price, id],
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

// Delete Product to Database
export const deleteOrderById = (id, result) => {
  db.query("DELETE FROM orders WHERE order_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
