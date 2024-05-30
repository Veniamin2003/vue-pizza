<template>
	<div class="main bg-white w-11/12 m-auto rounded-xl shadow-xl mt-14 ">
		<div v-if="IS_USER">
			<Header />
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
import Header from "@/components/Header";

export default {
	name: 'Main',
	components: {AdminHeader, Login, Header },
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
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

.main {
	height: 100%;
	min-height: calc(100vh - 96px);
	padding-bottom: 50px;
}
</style>
