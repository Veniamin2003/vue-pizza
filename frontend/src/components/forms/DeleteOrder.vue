<template>
	<div class="deleteOrder">
		<img :src="DELETE" class="deleteOrder__picture" alt="">
		<div class="deleteOrder__text">Вы действительно хотите удалить данный заказ?</div>
		<div class="deleteOrder__btn">
			<Button name="Удалить" color="#f44336" @click.prevent="deleteOrder"/>
		</div>
	</div>
</template>
<script>
import {mapActions} from "vuex";
import Button from "@/components/btns/Button";
import DELETE from "@/img/delete.png";

export default {
	name: 'DeleteOrder',
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
			DELETE_ORDER: "products/DELETE_ORDER"
		}),
		deleteOrder() {
			this.DELETE_ORDER(this.id)
			this.$emit('update:isActive', false);
		},
	}
}
</script>
<style lang="scss" scoped>
.deleteOrder {
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
