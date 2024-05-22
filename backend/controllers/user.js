import {
    getUsers,
} from "../models/userModel.js";

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
