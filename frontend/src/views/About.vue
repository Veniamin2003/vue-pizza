<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center my-8">О нас</h1>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold mb-4">О пиццерии "Ароматные круги"</h2>
      <p class="text-lg">
        Пиццерия "Ароматные круги" - это идеальное место для любителей вкусной и
        ароматной пиццы. Мы готовим нашу пиццу с использованием только самых
        свежих и качественных ингредиентов. Наши повара - настоящие мастера
        своего дела, которые вкладывают душу в каждую пиццу.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold mb-4">Наши преимущества</h2>
      <ul class="list-disc list-inside">
        <li class="text-lg">Свежие и качественные ингредиенты</li>
        <li class="text-lg">Широкий ассортимент пицц на любой вкус</li>
        <li class="text-lg">Быстрая доставка и отличное обслуживание</li>
        <li class="text-lg">Уютная атмосфера и приятный интерьер</li>
      </ul>
    </section>

    <Reviews />
  </div>
</template>

<script>
import Reviews from "@/components/Reviews";

import Test from "@/components/Test";

export default {
  name: "About",
  components: {
    Reviews,
    Test
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
