<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/views/OrderList.vue";

export default {
  name: "Index",
  components: {
    ProductList,
  },
};
</script>
