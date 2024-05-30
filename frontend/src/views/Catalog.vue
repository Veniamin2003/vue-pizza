<template>
	<div>
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
			this.$router.push('/')
		}
	},
	mounted() {
		this.GET_PRODUCTS();
	},
}
</script>
