<script setup>

defineProps({
  totalPrice:Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between px-10 py-8">
    <div class="flex items-center gap-4">
      <img src="../img/logo.png" alt="logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Ароматные круги</h2>
        <p class="text-slate-400">пицца, которая согревает сердце</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <router-link :to="{ name: 'Catalog' }">Каталог</router-link>
      </li>
      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <router-link :to="{ name: 'About' }">О нас</router-link>
      </li>
      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <router-link :to="{ name: 'Contacts' }">Контакты</router-link>
      </li>
      <!-- <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black"
      >
        <img src="../img/cart.svg" alt="Cart" />
        <b> {{totalPrice}} ₽</b>
      </li>

      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <img src="../img/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li> -->
      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <img src="../img/profile.svg" alt="Cart" />
        <router-link :to="{ name: 'User' }">Профиль</router-link>
      </li>
    </ul>
  </header>
</template>
