import {
    getUserById,
    getUsers, updateUserById,
} from "../models/userModel.js";
import {getProductById, updateProductById} from "../models/productModel.js";

// получить все заказы
export const showUsers = (req, res) => {

    getUsers((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

//получить юзера по id
export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

// Update Product
export const updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

