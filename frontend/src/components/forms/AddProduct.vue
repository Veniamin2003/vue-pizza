<template>
	<div class="addProduct">
		<div class="addProduct__title">Добавление товара</div>
		<form class="form">
			<div class="form__group">
				<label class="form__label"  for="name">Фотография</label>
				<input type="text" id="name" v-model="img" />
			</div>
			<div class="form__group">
				<label class="form__label"  for="email">Название</label>
				<input type="text" id="name" v-model="name" />
			</div>
			<div class="form__group">
				<label class="form__label"  for="phone">Описание</label>
				<input type="text" id="description" v-model="description" />
			</div>
			<div class="form__group">
				<label class="form__label" for="address">Цена</label>
				<input type="text" id="price" v-model="price" />
			</div>
			
			<Button name="Добавить" @click.prevent="addProduct"/>
		</form>
	</div>
</template>
<script>
import {inject} from "vue";
import {mapActions} from "vuex";
import Button from "@/components/btns/Button";

export default {
	name: 'AddProduct',
	props: {
		isActive: Boolean,
	},
	components: {
		Button
	},
	data() {
		return {
			name: "",
			description: "",
			price: "",
			img: ""
		};
	},
	
	methods: {
		...mapActions({
			ADD_PRODUCT: "products/ADD_PRODUCT"
		}),
		addProduct() {
			let data = []
			data.img = this.img
			data.name = this.name
			data.description = this.description
			data.price = this.price
			this.ADD_PRODUCT(data)
			this.$emit('update:isActive', false);
		},
		closePopup() {
		
		},
	}
}
</script>
<style lang="scss" scoped>
.addProduct {
	&__title {
		font-size: 28px;
		font-weight: 600;
	}
}
</style>
