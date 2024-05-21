<template>
	<Transition name="popup">
		<div class="popup" v-if="isActive">
			<span class="close-button" @click="closePopup()">&times;</span>
			<h2>{{ title }}</h2>
			<div class="content">
				<p>{{content}}</p>
			</div>
<!--			<input v-bind="inputValue" type="text" placeholder="Enter some text" />-->
			<select v-model="paymentMethod">
				<option value="card">Картой курьеру</option>
				<option value="cash">Наличными</option>
				<option value="pickup">Самовывоз</option>
			</select>
			<div class="actions">
				<button onclick="confirmPopup()">Confirm</button>
				<button onclick="cancelPopup()">Cancel</button>
			</div>
		</div>
	</Transition>
</template>
<script>
import {inject} from "vue";
import StatusSelect from "@/components/StatusSelect";
import PaymentSelect from "@/components/PaymentSelect";

export default {
	name: 'Popup',
	props: {
		isActive: {type: Boolean},
		title: {
			type: String,
			default: 'Popup Title'
		},
		content: {
			type: String,
			default: 'This is the popup content.'
		},
		inputValue: {
			type: String,
			default: ''
		},
	},
	components: {
		StatusSelect,
		PaymentSelect
	},
	data() {
		return {
			paymentMethod: {
				type: String,
				default: 'card'
			}
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
		
		},
		cancelPopup() {
		
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
