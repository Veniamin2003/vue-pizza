//import functions from Product model
import {
  getOrders,
  getOrderById,
  insertOrder,
  updateOrderStatusById,
  deleteOrderById,
} from "../models/orderModel.js";

// получить все заказы
export const showOrders = (req, res) => {

  getOrders((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// получить конкретный заказ по id
export const showOrderById = (req, res) => {
  getOrderById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// создать новый заказ
export const createOrder = (req, res) => {
  const data = req.body;

  insertOrder(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// обновить заказ
export const updateOrderStatus = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data)
  console.log(id)
  updateOrderStatusById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// удалить заказ
export const deleteOrder = (req, res) => {
  const id = req.params.id;
  deleteOrderById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
