<script setup>
import DrawerHead from './DrawerHead.vue'
import CardItemList from './CardItemList.vue'
import { computed } from 'vue'

const emit=defineEmits(['createOrder'])

const props=defineProps({
  totalPrice: Number,
  vatPrice: Number,
  isCreatingOrder: Boolean
})

const buttonDisabled = computed(() => props.isCreatingOrder.value?true:props.totalPrice?false:true);
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />
    <CardItemList />

    <div class="flex flex-col gap-4 mb-6 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{totalPrice}} ₽</b>
      </div>

      <div class="flex gap-2">
        <span>Налог 5%</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{vatPrice}} ₽</b>
      </div>
      <button :disabled="buttonDisabled"
      @click="()=>emit('createOrder')"
      class="mt-4 transition bg-amber-500 w-full rounded-xl disabled:bg-amber-400 py-3 hover:bg-amber-600 active:bg-amber-700 cursor-pointer"
    >
      Оформить заказ
    </button>
    </div>
    
  </div>
</template>
