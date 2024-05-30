<template>
  <div class="container mx-auto p-4 max-w-md">
    <div class="bg-white shadow-md rounded-lg p-6">
      <div class="text-center mb-6">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          :src="user.photoUrl"
          alt="User Photo"
        />
        <h2 class="text-2xl font-semibold mt-4">{{ user.name }}</h2>
        <p class="text-gray-600">@{{ user.username }}</p>
      </div>
      <form @submit.prevent="updateProfile" class="space-y-4">
        <div>
          <label class="block text-lg font-medium mb-2" for="name"
            >Имя пользователя</label
          >
          <input
            class="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            v-model="user.name"
            required
          />
        </div>
        <div>
          <label class="block text-lg font-medium mb-2" for="username"
            >Никнейм</label
          >
          <input
            class="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="username"
            v-model="user.username"
            required
          />
        </div>
        <div>
          <label class="block text-lg font-medium mb-2" for="password"
            >Пароль</label
          >
          <input
            class="w-full p-2 border border-gray-300 rounded"
            type="password"
            id="password"
            v-model="user.password"
            required
          />
        </div>
        <div>
          <label class="block text-lg font-medium mb-2" for="phone"
            >Номер телефона</label
          >
          <input
            class="w-full p-2 border border-gray-300 rounded"
            type="tel"
            id="phone"
            v-model="user.phone"
            required
          />
        </div>
        <button class="bg-blue-500 text-white p-2 rounded w-full" type="submit">
          Обновить профиль
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: {
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=0b1fe009caf3d4ee7031563bace3bbcf3dfe129e-12427807-images-thumbs&n=13", // замените на реальный URL фотографии
        name: "Алексей",
        username: "aleks",
        password: "12345",
        phone: "+79925032134",
      },
    };
  },
  methods: {
    updateProfile() {
      // Здесь можно добавить логику для обновления профиля пользователя
      alert("Профиль обновлен");
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
