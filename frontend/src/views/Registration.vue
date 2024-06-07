<template>
	<div class="registration">
		<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
				<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Создайте свой аккаун</h2>
			</div>
			
			<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form class="space-y-6" method="POST" @submit.prevent="onSubmit">
					<div>
						<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Ваше имя</label>
						<div class="mt-1">
							<input v-model="name" id="name" name="name" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Номер телефона</label>
						<div class="mt-1">
							<input v-model="phone" id="phone" name="phone" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
						<div class="mt-1">
							<input v-model="login" id="login" name="login" type="text" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					
					<div>
						<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
						<div class="mt-1">
							<input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Фотография</label>
						<div class="mt-1">
							<input v-model="img" id="img" name="img" type="text" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Расскажите о себе</label>
						<div class="field mt-1">
							<textarea v-model="about" id="about" name="about" type="text" autocomplete="current-password" required="" maxlength="450" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
						</div>
					</div>
					
					<div>
						<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Зарегистрироваться</button>
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
	name: 'Registration',
	components: { },
	data() {
		return {
			name: "",
			login: "",
			password: "",
			phone: "",
			img: "",
			about: "",
			errorMessage: '',
		};
	},
	methods: {
		...mapActions({
			GET_USERS: "products/GET_USERS",
			ADD_USER: "products/ADD_USER",
		}),
		...mapMutations({
		
		}),
		onSubmit() {
			// производим поиск в базе данных пользователя с введеным логином и паролем
			let foundUser = this.USERS.find((user) => user.user_login === this.login);
			
			if (!foundUser) {
				this.errorMessage = '';
				try {
					let newUser= []
					newUser.name = this.name
					newUser.login = this.login
					newUser.password = this.password
					newUser.phone = this.phone
					newUser.img = this.img
					newUser.about = this.about
					
					this.ADD_USER(newUser)

					this.$router.push('/login');
				} catch (err) {
					console.error(err)
				}
			} else {
				this.errorMessage = 'Пользователь с таким лоогином уже существует';
			}
		}
	},
	computed: {
		...mapGetters({
			USERS: "products/USERS"
		}),
	},
	mounted() {
	
		// this.GET_USERS();
	},
}
</script>

<style lang="scss" scoped>
.registration {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.field {
	textarea {
		min-height: 120px;
	}
}
</style>
