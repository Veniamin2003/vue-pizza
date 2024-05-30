<template>
	<div>
		<h2>Оформление заказа - {{ title }}</h2>
		<div class="content">
			<p>На сумму : {{price}}</p>
		</div>
		<div class="flex flex-col gap-3">
			<input v-model="addressDelivery" type="text" placeholder="Введите адрес доставки" />
			<select v-model="paymentMethod">
				<option value="Картой курьеру">Картой курьеру</option>
				<option value="Наличными">Наличными</option>
			</select>
		</div>
		
		<div class="actions">
			<button @click="confirmPopup()">Отправить</button>
			<button @click="cancelPopup()">Отменить</button>
		</div>
	</div>
</template>
<script>

export default {
	name: 'AddOrder',
	props: {
		isActive: {type: Boolean},
		title: {
			type: String,
			default: 'Popup Title'
		},
		price: {type: Number},
	},
	components: {
	},
	data() {
		return {
			paymentMethod: 'Наличными',
			addressDelivery: "",
		};
	},
	setup() {},
	methods: {
		confirmPopup() {
			let data = []
			data.paymentMethod = this.paymentMethod
			data.addressDelivery = this.addressDelivery
			this.$emit('addOrder', data);
			this.$emit('update:isActive', false);
		},
		cancelPopup() {
			this.$emit('update:isActive', false);
		},
	}
}
</script>
<style lang="scss" scoped>

</style>
