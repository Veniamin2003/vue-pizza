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
        async ADD_CART_ITEM({state, commit}, item) {
            try {

                // commit("SET_LOADING", true);

                await axios.post("http://localhost:5000/orders", {
                    product_id: item.id,
                    user_id: "2",
                    order_address: "адрес",
                    order_date: "2020-10-10",
                    order_status: "Не начат",
                    order_pay_type: "Наличными"
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
