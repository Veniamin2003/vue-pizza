<template>
	<div class="bg-white w-11/12 m-auto rounded-xl shadow-xl mt-14">
		<h1>Header</h1>
		<router-view/>
		<h1>Footer</h1>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
	name: 'Main',
	components: { },
	data() {
		return {}
	},
	methods: {
		...mapActions({
			GET_PRODUCTS: "products/GET_PRODUCTS"
		})
	},
	computed: {
		...mapGetters({
			PRODUCTS: "products/PRODUCTS"
		}),
		...mapState({
			products: state => state.products.products,
		})
	},

	mounted() {
		this.GET_PRODUCTS();
	},
}
</script>
