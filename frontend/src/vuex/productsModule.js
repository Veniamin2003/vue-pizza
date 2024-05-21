import axios from "axios";

export const productsModule = {
    state: {
        products: [],
        cartItems: []
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
        async ADD_CART_ITEM({state, commit}, order) {
            try {

                // commit("SET_LOADING", true);

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
                // commit("SET_LOADING", false);
                // commit("COPY_IN_USERS_BACKUP");
            }
        },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        ADD_CART_ITEM(state, item) {
            state.cartItems.push(item)
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
    },
    namespaced: true
}
