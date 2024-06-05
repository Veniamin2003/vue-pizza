<template>
	<div class="editProduct">
		<div class="editProduct__title">Редактирование личных данных</div>
		<form class="form">
			<div class="form__group">
				<label class="form__label" for="name">Фотография</label>
				<input type="text" id="img" v-model="newImg" />
			</div>
			<div class="form__group">
				<label class="form__label" for="email">Имя</label>
				<input type="text" id="name" v-model="newName" />
			</div>
			<div class="form__group">
				<label class="form__label" for="phone">Телефон</label>
				<input type="tel" id="phone" v-model="newPhone" />
			</div>
			<div class="form__group">
				<label class="form__label" for="phone">О себе</label>
				<textarea type="text" id="about" v-model="newAbout" />
			</div>
			
			
			<Button name="Обновить" @click.prevent="updateUser"/>
		</form>
	</div>
</template>
<script>
import {inject} from "vue";
import {mapActions} from "vuex";
import Button from "@/components/btns/Button";

export default {
	name: 'EditUser',
	props: {
		isActive: Boolean,
		id: Number,
		img: String,
		name: String,
		phone: String,
		about: String,
	},
	components: {
		Button
	},
	data() {
		return {
			newImg: this.img,
			newName: this.name,
			newPhone: this.phone,
			newAbout: this.about,
		};
	},
	setup() {},
	methods: {
		...mapActions({
			UPDATE_USER: "products/UPDATE_USER"
		}),
		updateUser() {
			let data = []
			data.id = this.id
			data.img = this.newImg
			data.name = this.newName
			data.phone = this.newPhone
			data.about = this.newAbout
			this.UPDATE_USER(data)
			this.$emit('update:isActive', false);
		}
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
