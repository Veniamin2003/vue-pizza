<template>
	<div class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between gap-3">
		<div>
			<img class="w-56" :src="img" alt="Pizza" />
			<p class="mt-2 font-bold">{{ name }}</p>
			<p class="mt-2">{{ desc }}</p>
		</div>
		
		<div class="flex justify-between mt-auto">
			<div class="flex gap-1.5">
				<span class="text-state-400">Цена:</span>
				<b>{{ price }}</b>
			</div>
			
			
<!--			<img @click="openPopup" @update:isActive="isActive = $event" src="../img/plus.svg" alt="Plus" />-->
		</div>
		<Button class="btn" name="Оформить заказ" color="#fed54f" @click="openPopup"/>
	</div>
	<Popup :isActive="isActive" @update:isActive="isActive = $event">
		<AddOrder
				:id="id"
				:title="name"
				:desc="desc"
				:price="price"
				:img="img"
				@addOrder="addOrder"
				:isActive="isActive"
				@update:isActive="isActive = $event"
		/>
	</Popup>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import Popup from "@/components/Popup";
import {provide, ref} from "vue";
import AddOrder from "@/components/forms/AddOrder";
import Button from "@/components/btns/Button";

export default {
	name: 'CatalogCard',
	components: {Button, AddOrder, Popup },
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
		
		return {
			isActive,
			openPopup
		}
	},
	methods: {
		...mapActions({
			ADD_ORDER: "products/ADD_ORDER"
		}),
		addOrder(popupData) {
			let date = new Date();
			date = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
			
			let order = []
			order.id = this.id
			order.name = this.name
			order.paymentMethod = popupData.paymentMethod
			order.addressDelivery = popupData.addressDelivery
			order.date = date
			
			this.ADD_ORDER(order)
		},
		openPopup() {
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

<style lang="scss" scoped>
.btn {
	color: #000000;
	font-weight: 500;
}
</style>
