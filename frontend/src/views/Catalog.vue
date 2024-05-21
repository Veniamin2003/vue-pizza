<template>
	<div>
		<h1>Товары</h1>
		<div class="grid grid-cols-4 gap-5">
			<ProductCard
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
</template>

<script>
import {mapGetters} from "vuex";
import ProductCard from "@/components/ProductCard";

export default {
	name: 'Catalog',
	components: { ProductCard },
	data() {
		return {}
	},
	computed: {
		...mapGetters({
			PRODUCTS: "products/PRODUCTS"
		}),
	},
}
</script>
