<template>
	<div class="container mx-auto p-4 max-w-md">
		<div class="inner bg-white shadow-md rounded-lg p-6">
			<div class="top">
				<div class="picture">
					<img
							class="avatar"
							:src="this.CURRENT_USER.user_img"
							alt="User Photo"
					/>
				</div>
				<h2 class="text-2xl font-semibold">{{ this.CURRENT_USER.user_name }}</h2>
				<p class="text-gray-600">@{{ this.CURRENT_USER.user_login }}</p>
			</div>
			<form @submit.prevent="updateProfile" class="space-y-4">
				<div>
					<label class="block text-sm font-light mb-2 text-gray-500" for="name">Имя пользователя</label>
					<div class="text-lg font-medium mb-2">{{ this.CURRENT_USER.user_name }}</div>
				</div>
				<div>
					<label class="block text-sm font-light mb-2 text-gray-500" for="username">Никнейм</label>
					<div class="text-lg font-medium mb-2">{{ this.CURRENT_USER.user_login }}</div>
				</div>
				<div>
					<label class="block text-sm font-light mb-2 text-gray-500" for="phone">Номер телефона</label>
					<div class="text-lg font-medium mb-2">{{ this.CURRENT_USER.user_phone }}</div>
				</div>
				<div>
					<label class="block text-sm font-light mb-2 text-gray-500" for="phone">О себе</label>
					<div class="text-18 font-light mb-10">{{ this.CURRENT_USER.user_about }}</div>
				</div>
				<Button name="Обновить профиль" @click.prevent="openEdit"/>
			</form>
		</div>
	</div>
	<Popup :isActive="editIsActive" @update:isActive="editIsActive = $event">
		<EditUser
				:id="this.CURRENT_USER.user_id"
				:img="this.CURRENT_USER.user_img"
				:name="this.CURRENT_USER.user_name"
				:phone="this.CURRENT_USER.user_phone"
				:about="this.CURRENT_USER.user_about"
				:isActive="editIsActive" @update:isActive="editIsActive = $event"
		/>
	</Popup>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import Button from "@/components/btns/Button";
import Popup from "@/components/Popup";
import EditUser from "@/components/forms/EditUser";
import {ref} from "vue";

export default {
	name: "User",
	components: {EditUser, Popup, Button},
	computed: {
		...mapGetters({
			CURRENT_USER: "products/CURRENT_USER"
		}),
		...mapState({
			currentUser: state => state.products.currentUser,
		})
	},
	setup() {
		const editIsActive = ref(false)
		
		const openEditPopup = () => {
			editIsActive.value = true
		}
		return {
			editIsActive,
			openEditPopup
		};
	},
	methods: {
		...mapActions({
			GET_CURRENT_USER: "products/GET_CURRENT_USER"
		}),
		openEdit() {
			this.openEditPopup()
		},
	},
	
	mounted() {
		this.GET_CURRENT_USER()
	}
};
</script>

<style scoped>
.container {
	max-width: 600px;
}
.inner {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.top {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
}
.picture {
	width: 250px;
	height: 250px;
	border-radius: 50%;
	overflow: hidden;
}
.avatar {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}
</style>
