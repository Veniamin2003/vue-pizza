<template>
	<Transition name="popup">
		<div class="popup" v-if="isActive">
			<span class="close-button" @click="closePopup()">&times;</span>
			<slot></slot>
		</div>
	</Transition>
</template>
<script>
import {inject} from "vue";

export default {
	name: 'Popup',
	props: {
		isActive: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		closePopup() {
			this.$emit('update:isActive', false);
		},
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
	border-radius: 15px;
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
	top: 5px;
	right: 15px;
	font-size: 3em;
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
