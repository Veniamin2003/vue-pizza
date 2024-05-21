<script setup>

defineProps({
  totalPrice:Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between px-10 py-8">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Ароматные круги</h2>
        <p class="text-slate-400">пицца, которая согревает сердце</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <span><a href="">Главная</a></span>
      </li>
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <b> {{totalPrice}} ₽</b>
      </li>

      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <img src="/heart.svg" alt="Cart" />
        <span>Закладки</span>
      </li>

      <li class="flex items-center gap-3 text-neutral-800 cursor-pointer hover:text-black">
        <img src="/profile.svg" alt="Cart" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
