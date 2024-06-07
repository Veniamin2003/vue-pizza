<template>
	<div class="catalog">
		<div class="catalog__fscreen"></div>
		<div class="catalog__content">
			<div class="catalog__title">Каталог товаров</div>
			<div class="grid grid-cols-4 gap-5">
				<CatalogCard
						v-for="product in PRODUCTS"
						:key="product.product_id"
						:id="product.product_id"
						:name="product.product_name"
						:desc="product.product_description"
						:price="product.product_price"
						:img="product.product_img"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CatalogCard from "@/components/CatalogCard";

export default {
	name: 'Catalog',
	components: { CatalogCard },
	data() {
		return {}
	},
	computed: {
		...mapGetters({
			PRODUCTS: "products/PRODUCTS",
			IS_ADMIN: "products/IS_ADMIN",
			IS_USER: "products/IS_USER",
		}),
	},
	methods: {
		...mapActions({
			GET_PRODUCTS: "products/GET_PRODUCTS"
		})
	},
	beforeMount() {
		if (!this.IS_ADMIN && !this.IS_USER) {
			this.$router.push('/login')
		}
	},
	mounted() {
		this.GET_PRODUCTS();
	},
}
</script>

<style lang="scss" scoped>
.catalog {
	
	&__fscreen {
		height: 652px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		background-image: url("../img/fscreen.jpg");
		background-size: 100% auto;
		background-position: center;
		background-repeat: no-repeat;
		color: #fff;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 25px;
		padding: 0 25px;
		margin-top: 30px;
	}
	&__title {
		font-size: 45px;
		font-weight: 600;
	}
}
</style>
