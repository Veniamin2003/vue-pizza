<template>
	<Transition name="popup">
		<div class="popup" v-if="isActive">
			<span class="close-button" @click="closePopup()">&times;</span>
			<h2>Оформление заказа - {{ title }}</h2>
			<div class="content">
				<p>На сумму : {{price}}</p>
			</div>
			<div class="flex flex-col gap-3">
				<input v-model="addressDelivery" type="text" placeholder="Введите адрес доставки" />
				<select v-model="paymentMethod">
					<option value="Картой курьеру">Картой курьеру</option>
					<option value="Наличными">Наличными</option>
					<option value="Самовывоз">Самовывоз</option>
				</select>
			</div>
			
			<div class="actions">
				<button @click="confirmPopup()">Confirm</button>
				<button @click="cancelPopup()">Cancel</button>
			</div>
		</div>
	</Transition>
</template>
<script>
import {inject} from "vue";

export default {
	name: 'Popup',
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
			addressDelivery: ""
		};
	},
	setup(props, { emit }) {
		const isActive = inject('isActive')
		
		const closePopup = () => {
			isActive.value = !isActive.value
			emit('update:isActive', isActive.value)
		}
		
		return {
			isActive,
			closePopup
		}
	},
	methods: {
		confirmPopup() {
			let data = []
			data.paymentMethod = this.paymentMethod
			data.addressDelivery = this.addressDelivery
			this.$emit('addOrder', data);
			this.closePopup()
		},
		cancelPopup() {
			this.closePopup()
		}
	}
}
</script>
<style lang="css" scoped>
.popup-enter-active,
.popup-leave-active {
	transition: transform 0.3s ease, opacity 0.3s ease;
}
.popup-enter,
.popup-leave-to {
	transform: translate(-50%, -50%) scale(0);
	opacity: 0;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.popup {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(1);
	background-color: white;
	padding: 20px;
	border: 1px solid #ccc;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	max-width: 80%;
	width: 500px;
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.popup h2 {
	margin-top: 0;
}

.popup .close-button {
	position: absolute;
	top: 10px;
	right: 15px;
	font-size: 1.5em;
	cursor: pointer;
}

.popup .content {
	margin-bottom: 10px;
}

.popup .actions {
	display: flex;
	justify-content: flex-end;
}
</style>
