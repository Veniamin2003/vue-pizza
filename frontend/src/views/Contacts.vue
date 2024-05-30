<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center my-8">Контакты</h1>
    
    <section class="mb-12">
      <h2 class="text-3xl font-semibold mb-4">Свяжитесь с нами</h2>
      <p class="text-lg mb-4">
        Если у вас есть вопросы, предложения или вы хотите сделать заказ, вы можете связаться с нами по следующим каналам:
      </p>
      <ul class="list-none space-y-4">
        <li class="text-lg">
          📞 <strong>Телефон:</strong> +7 (800) 123-45-67
        </li>
        <li class="text-lg">
          📧 <strong>Email:</strong> info@aromatnye-krugi.ru
        </li>
        <li class="text-lg">
          📍 <strong>Адрес:</strong> ул. Пиццерия, д. 1, г. Москва, Россия
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-semibold mb-4">Форма обратной связи</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-lg font-medium mb-2" for="name">Имя</label>
          <input class="w-full p-2 border border-gray-300 rounded" type="text" id="name" v-model="form.name" required>
        </div>
        <div>
          <label class="block text-lg font-medium mb-2" for="email">Email</label>
          <input class="w-full p-2 border border-gray-300 rounded" type="email" id="email" v-model="form.email" required>
        </div>
        <div>
          <label class="block text-lg font-medium mb-2" for="message">Сообщение</label>
          <textarea class="w-full p-2 border border-gray-300 rounded" id="message" v-model="form.message" required></textarea>
        </div>
        <button class="bg-blue-500 text-white p-2 rounded" type="submit">Отправить</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Здесь вы можете добавить код для отправки формы
      alert(`Спасибо за ваше сообщение, ${this.form.name}!`);
      // Очистка формы
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>