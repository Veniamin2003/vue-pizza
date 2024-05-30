<template>
  <section class="mb-12">
    <h2 class="text-3xl font-semibold mb-4">Отзывы наших клиентов</h2>
    <div class="space-y-4">
      <div
        v-for="item in TEST"
        :key="item.id"
        class="p-4 border rounded-lg shadow"
      >
        <p class="text-lg font-semibold">{{ item.name }}</p>
        <p class="text-gray-700">{{ item.review }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Test",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      TEST: "products/TEST",
    }),
  },
  methods: {
    ...mapActions({
      GET_TEST: "products/GET_TEST",
    }),
  },
  mounted() {
    this.GET_TEST();
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>