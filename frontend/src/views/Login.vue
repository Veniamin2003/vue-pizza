<template>
	<div class="login">
		<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
				<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Войдите в свой аккаун</h2>
			</div>
			
			<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form class="space-y-6" method="POST" @submit.prevent="onSubmit">
					<div>
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
						<div class="mt-2">
							<input v-model="login" id="login" name="login" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					
					<div>
						<div class="flex items-center justify-between">
							<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
<!--							<div class="text-sm">-->
<!--								<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Забыли пароль?</a>-->
<!--							</div>-->
						</div>
						<div class="mt-2">
							<input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					<div>
						<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Войти</button>
					</div>
					<div class="text-center">
						<router-link :to="{ name: 'Registration' }" class="font-semibold text-indigo-600 hover:text-indigo-500 ">Создать аккаунт</router-link>
					</div>
					<div v-if="errorMessage" class="error-message text-red-700 font-semibold">{{ errorMessage }}</div>
				</form>
				
				
				
				<p class="mt-10 text-center text-sm text-gray-500">
					Отправляя форму, вы соглашаетесь с <br>
					{{ ' ' }}
					<a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">политикой конфеденциальности LipetFood</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
	name: 'Login',
	components: { },
	data() {
		return {
			login: "",
			password: "",
			errorMessage: '',
		};
	},
	methods: {
		...mapActions({
			GET_USERS: "products/GET_USERS",
			SET_IS_ADMIN: "products/SET_IS_ADMIN",
			SET_IS_USER: "products/SET_IS_USER",
			
		}),
		...mapMutations({
			SET_TOKEN:"products/SET_TOKEN",
			SET_CURRENT_USER: "products/SET_CURRENT_USER"
		}),
		onSubmit() {
			// производим поиск в базе данных пользователя с введеным логином и паролем
			let foundUser = this.USERS.find((user) => user.user_login === this.login && user.user_password === this.password);
			
			if (foundUser) {
				this.errorMessage = '';
				try {
					this.SET_CURRENT_USER(foundUser)
					
					if (foundUser.user_role === "admin") {
						this.SET_IS_ADMIN(true)
						this.$router.push('/admin/orders');
					} else if (foundUser.user_role === "user") {
						this.SET_IS_USER(true)
						this.$router.push('/catalog');
					}
					// this.SET_TOKEN()
					
				} catch (err) {
					console.error(err)
				}
			} else {
				this.errorMessage = 'Неверный логин или пароль';
			}
		}
	},
	computed: {
		...mapGetters({
			USERS: "products/USERS"
		}),
	},
	mounted() {
		
		this.GET_USERS();
	},
}
</script>

<style>
.login {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.flex {

}
</style>
