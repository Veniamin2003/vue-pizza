import axios from "axios";

export const productsModule = {
  state: {
    products: [],
    orders: [],
    cartItems: [],
    users: [],
    isAdmin: false,
    isUser: false,
    currentUser: {},
    reviews: [],
    test: [],
    token: "",
    filteredOrders: []
  },
  actions: {
    // PRODUCTS
    async GET_PRODUCTS({ state, commit }) {
      try {
        const response = await axios.get("http://localhost:5000/products");

        commit("SET_PRODUCTS", response.data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
    async ADD_PRODUCT({ state, commit, dispatch }, data) {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name: data.name,
          product_description: data.description,
          product_price: data.price,
          product_img: data.img,
        });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("GET_PRODUCTS")
      }
    },
    async UPDATE_PRODUCT({ state, commit, dispatch }, data) {
      try {
        await axios.put(`http://localhost:5000/products/${data.id}`, {
          product_name: data.name,
          product_description: data.description,
          product_price: data.price,
          product_img: data.img,
        });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("GET_PRODUCTS")
      }
    },
    async DELETE_PRODUCT({ state, commit, dispatch }, id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`)
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("GET_PRODUCTS")
      }
    },

    // USERS
    async GET_USERS({ state, commit }) {
      try {
        const response = await axios.get("http://localhost:5000/users");
        commit("SET_USERS", response.data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
    async GET_CURRENT_USER({ state, commit }) {
      try {
        let id = state.currentUser.user_id
        const response = await axios.get(`http://localhost:5000/users/${id}`);

        commit("SET_CURRENT_USER", response.data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
    async ADD_USER({ state, commit }, user) {
      try {

        await axios.post("http://localhost:5000/users", {
          user_name: user.name,
          user_login: user.login,
          user_phone: user.phone,
          user_password: user.password ,
          user_role: "user",
          user_img: user.img,
          user_about: user.about,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async UPDATE_USER({ state, commit, dispatch }, data) {
      try {
        await axios.put(`http://localhost:5000/users/${data.id}`, {
          user_name: data.name,
          user_img: data.img,
          user_phone: data.phone,
          user_about: data.about,
        });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("GET_CURRENT_USER")
      }
    },
    async GET_CURRENT_REVIEW({ state, commit }) {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        commit("SET_REVIEWS", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    // ORDERS
    async GET_ORDERS({ state, commit}) {
      try {
        const response = await axios.get("http://localhost:5000/orders");
        commit("SET_ORDERS", response.data);
        commit("SET_CURRENT_USER_ORDERS", response.data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    },
    async ADD_ORDER({ state, commit }, order) {
      try {

        await axios.post("http://localhost:5000/orders", {
          product_id: order.id,
          user_id: state.currentUser.user_id,
          order_address: order.addressDelivery,
          order_date: order.date,
          order_status: "Не начат",
          order_pay_type: order.paymentMethod,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async UPDATE_ORDER_STATUS({ state, commit, dispatch }, data) {
      try {
        await axios.put(`http://localhost:5000/orders/${data.id}`, {
          order_status: data.status,
        });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("GET_ORDERS")
      }
    },
    async DELETE_ORDER({ state, commit, dispatch }, id) {
      try {
        await axios.delete(`http://localhost:5000/orders/${id}`)
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("GET_ORDERS")
      }
    },

    // REVIEWS
    async GET_REVIEWS({ state, commit }) {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        commit("SET_REVIEWS", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async ADD_REVIEW({ state, commit }, review) {
      try {
        await axios.post("http://localhost:5000/reviews", {
          name: review.name,
          review: review.desc,
        });
      } catch (err) {
        console.log(err);
      }
    },

    // OTHER
    SET_IS_ADMIN({ state, commit }, isAdmin) {
      try {
        commit("SET_IS_ADMIN", isAdmin);
      } catch (err) {
        console.log(err);
      }
    },
    SET_IS_USER({ state, commit }, isUser) {
      try {
        commit("SET_IS_USER", isUser);
      } catch (err) {
        console.log(err);
      }
    },
    async GET_TEST({ state, commit }) {
      try {
        const response = await axios.get("http://localhost:5000/test");
        commit("SET_TEST", response.data);
      } catch (err) {
        console.log(err);
      }
    },
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
    SET_CURRENT_USER_ORDERS(state, filteredOrders) {
      state.filteredOrders = filteredOrders.filter(order => order.user_id === state.currentUser.user_id);
    },
    ADD_ORDER(state, item) {
      state.cartItems.push(item);
    },
    SET_IS_ADMIN(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    SET_IS_USER(state, isUser) {
      state.isUser = isUser;
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    SET_TEST(state, test) {
      state.test = test;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token)
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    ORDERS(state) {
      return state.orders;
    },
    USERS(state) {
      return state.users;
    },
    IS_ADMIN(state) {
      return state.isAdmin;
    },
    IS_USER(state) {
      return state.isUser;
    },
    REVIEWS(state) {
      return state.reviews;
    },
    CURRENT_USER(state) {
      return state.currentUser;
    },
    CURRENT_USER_ORDERS(state) {
      return state.filteredOrders;
    },
    TEST(state) {
      return state.test;
    },
    TOKEN(state) {
      return state.token;
    }
  },
  namespaced: true,
};
