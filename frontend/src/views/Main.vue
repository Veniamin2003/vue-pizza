<template>
	<div class="main bg-white w-11/12 m-auto rounded-xl shadow-xl mt-14 ">
		<div v-if="IS_USER">
			<div>хедер юзеры</div>
			<router-view/>
		</div>
		<div v-else-if="IS_ADMIN">
			<AdminHeader />
			<router-view/>
		</div>
		<div v-else class="login">
			<Login />
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import Login from "@/views/Login";
import AdminHeader from "@/components/AdminHeader";

export default {
	name: 'Main',
	components: {AdminHeader, Login },
	data() {
		return {}
	},
	computed: {
		...mapGetters({
			IS_ADMIN: "products/IS_ADMIN",
			IS_USER: "products/IS_USER",
		})
	},
	beforeMount() {
		if (!this.IS_ADMIN && !this.IS_USER) {
			this.$router.push('/')
		}
	},
}
</script>

<style>
.main {
	height: 100%;
	min-height: calc(100vh - 96px);
}
</style>
