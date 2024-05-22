import {createStore} from "vuex";
import {productsModule} from "@/vuex/productsModule";

export default createStore({
    modules: {
        products: productsModule,
    }
})
