<template>
	<select v-model="selectedPaymentMethod">
		<option value="card">Картой курьеру</option>
		<option value="cash">Наличными</option>
		<option value="pickup">Самовывоз</option>
	</select>
</template>

<script>
export default {
	name: 'PaymentSelect',
	props: {
		value: {
			type: String,
			required: true
		}
	},
	computed: {
		selectedPaymentMethod: {
			get() {
				return this.value
			},
			set(newValue) {
				this.$emit('input', newValue)
			}
		}
	}
}
</script>
