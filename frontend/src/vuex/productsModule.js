import axios from "axios";

export const productsModule = {
    state: {
        products: [],
        orders: [],
        cartItems: [],
        users: [],
        isAdmin: false,
        isUser: false,
        currentUser: {}
    },
    actions: {
        async GET_PRODUCTS({state, commit}) {
            try {
                // commit("SET_LOADING", true);

                const response = await axios.get("http://localhost:5000/products");

                commit('SET_PRODUCTS', response.data)
            } catch (err) {
                console.log(err);
            } finally {
                // commit("SET_LOADING", false);
                // commit("COPY_IN_USERS_BACKUP");
            }
        },
        async GET_USERS({state, commit}) {
            try {
                const response = await axios.get("http://localhost:5000/users");

                commit('SET_USERS', response.data)
            } catch (err) {
                console.log(err);
            } finally {
            }
        },
        async GET_ORDERS({state, commit}) {
            try {
                const response = await axios.get("http://localhost:5000/orders");
                debugger
                commit('SET_ORDERS', response.data)

            } catch (err) {
                console.log(err);
            } finally {
            }
        },
        async ADD_ORDER({state, commit}, order) {
            try {
                await axios.post("http://localhost:5000/orders", {
                    product_id: order.id,
                    user_id: "2",
                    order_address: order.addressDelivery,
                    order_date: order.date,
                    order_status: "Не начат",
                    order_pay_type: order.paymentMethod
                });
            } catch (err) {
                console.log(err);
            } finally {
            }
        },
        SET_IS_ADMIN({state, commit}, isAdmin){
            try {
                commit('SET_IS_ADMIN', isAdmin)
            } catch (err) {
                console.log(err);
            }
        },
        SET_IS_USER({state, commit}, isUser){
            try {
                commit('SET_IS_USER', isUser)
            } catch (err) {
                console.log(err);
            }
        }

    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_ORDERS(state, orders) {
            state.orders = orders;
        },
        ADD_ORDER(state, item) {
            state.cartItems.push(item)
        },
        SET_IS_ADMIN(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        SET_IS_USER(state, isUser) {
            state.isUser = isUser;
        },
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        ORDERS(state){
            return state.orders;
        },
        USERS(state){
            return state.users;
        },
        IS_ADMIN(state){
            return state.isAdmin;
        },
        IS_USER(state){
            return state.isUser;
        }
    },
    namespaced: true
}
