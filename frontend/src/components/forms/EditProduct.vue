<template>
	<div class="editProduct">
		<div class="editProduct__title">Редактирование товара</div>
		<form class="form">
			<div class="form__group">
				<label for="name">Фотография</label>
				<input type="text" id="name" v-model="newImg" />
			</div>
			<div class="form__group">
				<label for="email">Название</label>
				<input type="email" id="email" v-model="newName" />
			</div>
			<div class="form__group">
				<label for="phone">Описание</label>
				<input type="tel" id="phone" v-model="newDescription" />
			</div>
			<div class="form__group">
				<label class="form__label" for="address">Цена</label>
				<input type="text" id="address" v-model="newPrice" />
			</div>
			
			<Button name="Обновить" @click.prevent="updateProduct"/>
		</form>
	</div>
</template>
<script>
import {inject} from "vue";
import {mapActions} from "vuex";
import Button from "@/components/btns/Button";

export default {
	name: 'EditProduct',
	props: {
		isActive: Boolean,
		id: Number,
		name: String,
		description: String,
		price: Number,
		img: String
	},
	components: {
		Button
	},
	data() {
		return {
			newName: this.name,
			newDescription: this.description,
			newPrice: this.price,
			newImg: this.img
		};
	},
	setup() {},
	methods: {
		...mapActions({
			UPDATE_PRODUCT: "products/UPDATE_PRODUCT"
		}),
		updateProduct() {
			let data = []
			data.id = this.id
			data.img = this.newImg
			data.name = this.newName
			data.description = this.newDescription
			data.price = this.newPrice
			this.UPDATE_PRODUCT(data)
			this.$emit('update:isActive', false);
		},
		closePopup() {
			// this.closePopup()
		},
	}
}
</script>
<style lang="scss">
.editProduct {
	&__title {
		font-size: 28px;
		font-weight: 600;
	}
}


</style>
