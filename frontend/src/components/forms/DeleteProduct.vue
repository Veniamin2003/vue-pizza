<template>
	<div class="deleteProduct">
		<img :src="DELETE" class="deleteProduct__picture" alt="">
		<div class="deleteProduct__text">Вы действительно хотите удалить данный товар?</div>
		<div class="deleteProduct__btn">
			<Button name="Удалить" color="#f44336" @click.prevent="deleteProduct"/>
		</div>
	</div>
</template>
<script>
import {mapActions} from "vuex";
import Button from "@/components/btns/Button";
import DELETE from "@/img/delete.png";

export default {
	name: 'DeleteProduct',
	props: {
		isActive: Boolean,
		id: Number,
	},
	components: {
		Button
	},
	data() {
		return {};
	},
	setup() {
		return {
			DELETE
		};
	},
	methods: {
		...mapActions({
			DELETE_PRODUCT: "products/DELETE_PRODUCT"
		}),
		deleteProduct() {
			this.DELETE_PRODUCT(this.id)
			this.$emit('update:isActive', false);
		},
	}
}
</script>
<style lang="scss" scoped>
.deleteProduct {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	padding: 35px 0 50px;
	
	&__picture {
		width: 100px;
		height: auto;
		aspect-ratio: 1/1;
	}
	&__text {
	
	}
	&__btn {
		max-width: 250px;
	}
}
</style>
