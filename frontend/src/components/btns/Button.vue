<template>
	<button class="btn" :style="'background-color:' + color">{{ name }}</button>
</template>
<script>
export default {
	name: 'Button',
	props: {
		name: String,
		color: {type: String, default: "#6366f1"}
	},
}
</script>
<style lang="scss" scoped>
.btn {
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all .3s ease-in-out;
	
	&:hover {
		opacity: 0.5;
	}
}
</style>
