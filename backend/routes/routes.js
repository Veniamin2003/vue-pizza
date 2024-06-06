//import express
import express from "express";

//import functions from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";
import {
  showOrders,
  showOrderById,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/order.js";

import {showUserById, showUsers, updateUser} from "../controllers/user.js";

import { showReviews } from "../controllers/reviews.js";

import { showTest } from "../controllers/test.js";
import {getUserById} from "../models/userModel.js";

//init express router
const router = express.Router();

//products
//get all product
router.get("/products", showProducts);

//get single product
router.get("/products/:id", showProductById);

// Create New Product
router.post("/products", createProduct);

// Update Product
router.put("/products/:id", updateProduct);

// Delete Product
router.delete("/products/:id", deleteProduct);

//orders
//get all orders
router.get("/orders", showOrders);

//get single order
router.get("/orders/:id", showOrderById);

// Create New order
router.post("/orders", createOrder);

// Update order
router.put("/orders/:id", updateOrderStatus);

// Delete order
router.delete("/orders/:id", deleteOrder);

// users
router.delete("/orders/:id", deleteOrder);

// export default router
// get all users
router.get("/users", showUsers);

//получить одного пользователя
router.get("/users/:id", showUserById);

//обновить пользователя
router.put("/users/:id", updateUser);

router.get("/reviews", showReviews);

router.get("/test", showTest);
export default router;
