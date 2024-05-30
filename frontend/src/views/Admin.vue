<template>
	<div class="admin">
		<OrderList />
	</div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import AdminHeader from "@/components/AdminHeader";
import OrderList from "@/views/OrderList";

export default {
	name: 'Admin',
	components: {OrderList, AdminHeader },
	data() {
		return {
		
		};
	},
	methods: {
		...mapActions({
			GET_USERS: "products/GET_USERS"
		}),
	},
	computed: {
		...mapGetters({
			USERS: "products/USERS",
			IS_ADMIN: "products/IS_ADMIN",
			IS_USER: "products/IS_USER",
		}),
	},
	beforeMount() {
		if (!this.IS_ADMIN && !this.IS_USER) {
			this.$router.push('/')
		}
	},
}

</script>

<style>
.admin {
	height: calc(100vh - 96px);
}
</style>
