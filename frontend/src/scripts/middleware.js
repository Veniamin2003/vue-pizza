import store from "@/vuex/store";

const authMiddleware = function (to, from, next) {
  const token = localStorage.getItem('token');
  if (token) {
    // если токен есть, вызываем action-ы авторизации и загрузки данных пользователя
    // store.dispatch('auth/checkAuth', token).then(() => {
    //   next();
    // });
  } else {
    // если токена нет, перенаправляем пользователя на страницу авторизации
    next('/login');
  }
};

export default authMiddleware;
