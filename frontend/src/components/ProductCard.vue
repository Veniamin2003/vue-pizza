<template>
	<div class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between gap-3">
		<div>
			<img class="w-56" :src="img" alt="Pizza" />
			<p class="mt-2 font-bold">{{ name }}</p>
			<p class="mt-2">{{ desc }}</p>
		</div>
		
		<div class="flex justify-between mt-auto">
			<div class="flex flex-col">
				<span class="text-state-400">Цена:</span>
				<b>{{ price }}</b>
			</div>
			
			<img @click="onClickAdd" @update:isActive="isActive = $event" src="../img/plus.svg" alt="Plus" />
		</div>
	</div>
	<Popup :isActive="isActive"/>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import Popup from "@/components/Popup";
import {provide, ref} from "vue";

export default {
	name: 'Main',
	components: { Popup },
	props: {
		id: {type: Number},
		name: {type: String},
		desc: {type: String},
		price: {type: Number},
		img: {type: String}
	},
	setup() {
		const isActive = ref(false)
		
		const openPopup = () => {
			isActive.value = true
		}
		provide('isActive', isActive)
		return {
			isActive,
			openPopup
		}
	},
	methods: {
		...mapActions({
			ADD_CART_ITEM: "products/ADD_CART_ITEM"
		}),
		onClickAdd() {
			// let item = []
			// item.id = this.id
			// item.name = this.name
			// item.desc = this.desc
			// item.price = this.price
			// item.img = this.img
			// this.ADD_CART_ITEM(item)
			this.openPopup();
		}
	},
	computed: {
		...mapGetters({
			PRODUCTS: "products/PRODUCTS"
		}),
		...mapState({
			cartItems: state => state.products.cartItems,
		})
	},
	
	
}
</script>
