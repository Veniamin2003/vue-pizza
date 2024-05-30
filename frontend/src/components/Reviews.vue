<template>
  <section class="mb-12">
    <h2 class="text-3xl font-semibold mb-4">Отсавить отзыв</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="block text-lg font-medium mb-2" for="name">Имя</label>
        <input
          class="w-full p-2 border border-gray-300 rounded"
          type="text"
          v-model="name"
          required
        />
      </div>
      <div>
        <label class="block text-lg font-medium mb-2" for="message"
          >Ваш отзыв</label
        >
        <textarea
          class="w-full p-2 border border-gray-300 rounded"
          v-model="desc"
          required
        ></textarea>
      </div>
      <button
        @click="addReviews()"
        class="bg-blue-500 text-white p-2 rounded"
        type="submit"
      >
        Отправить
      </button>
    </form>
  </section>
  <section class="mb-12">
    <h2 class="text-3xl font-semibold mb-4">Отзывы наших клиентов</h2>
    <div class="space-y-4">
      <div
        v-for="item in REVIEWS"
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

import { inject } from "vue";

export default {
  name: "Reviews",
  data() {
    return {
      name: "",
      desc: "",
    };
  },

  computed: {
    ...mapGetters({
      REVIEWS: "products/REVIEWS",
    }),
  },
  methods: {
    ...mapActions({
      GET_REVIEWS: "products/GET_REVIEWS",
      ADD_REVIEWS: "products/ADD_REVIEWS",
    }),
    addReview() {
      let review = [];
      review.name = this.name;
      review.desc = this.desc;
      this.ADD_REVIEWS(review);
    },
  },
  mounted() {
    this.GET_REVIEWS();
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
