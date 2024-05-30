<template>
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="inner">
			<div class="inner__head">
				<div class="inner__title">Товары</div>
				<div class="inner__add-product">
					<Button name="Добавить новый продукт" @click.prevent="addProduct"/>
				</div>
			</div>
			<div class="inner__orders">
				<div class="inner__header">
					<div>№</div>
					<div>Фотография</div>
					<div>Наименование</div>
					<div>Описание</div>
					<div>Стоимость</div>
					<div>Действия</div>
				</div>
				<TransitionGroup name="list" tag="div" class="inner__cards">
					<div v-for="item in PRODUCTS"
					     :key="item.product_id"
					     class="inner__wrapper"
					>
						<ProductCard
								:id="item.product_id"
								:name="item.product_name"
								:description="item.product_description"
								:price="item.product_price"
								:img="item.product_img"
						/>
					</div>
				</TransitionGroup>
			</div>
		</div>
		<Popup :isActive="isActive" @update:isActive="isActive = $event">
			<AddProduct :isActive="isActive" @update:isActive="isActive = $event"/>
		</Popup>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ProductCard from "@/components/ProductCard";
import Popup from "@/components/Popup";
import { ref } from "vue";
import Button from "@/components/btns/Button";
import AddProduct from "@/components/forms/AddProduct";

export default {
	name: 'ProductsList',
	components: {AddProduct, Button, ProductCard, Popup},
	setup() {
		const isActive = ref(false)
		
		const openPopup = () => {
			isActive.value = true
		}
		
		return {
			isActive,
			openPopup,
		}
	},
	computed: {
		...mapGetters({
			PRODUCTS: "products/PRODUCTS",
		}),
	},
	methods: {
		...mapActions({
			GET_PRODUCTS: "products/GET_PRODUCTS"
		}),
		addProduct() {
			this.openPopup()
		}
	},
	mounted() {
		this.GET_PRODUCTS();
	},
}
</script>

<style lang="scss" scoped>
.inner {
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	
	&__title {
		font-size: 45px;
		font-weight: 600;
	}
	&__orders {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&__header {
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 30px 125px 6fr 15fr 3fr 140px;
		justify-items: center;
		align-items: center;
		gap: 1px;
		font-size: 14px;
		font-weight: 600;
		padding-bottom: 7px;
		
		&:after {
			position: absolute;
			content: "";
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: rgba(31, 41, 55, 0.7);
			border-radius: 1px;
		}
	}
	
	&__cards {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&__head {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 40px;
		justify-content: space-between;
	}
	
	&__add-product {
		max-width: 300px;
	}
}

</style>
