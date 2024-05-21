<template>
	<select v-model="selectedStatus">
		<option value="not_started">Не начат</option>
		<option value="in_progress">В процессе</option>
		<option value="completed">Завершен</option>
		<option value="rejected">Отклонен</option>
	</select>
</template>

<script>
export default {
	name: 'StatusSelect',
	props: {
		value: {
			type: String,
			required: true
		}
	},
	computed: {
		selectedStatus: {
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
