<template>
	<div class="orderCard">
		<div class="orderCard__card">
			<div class="orderCard__items">
				<div class="orderCard__item">{{ id }}</div>
				<div class="orderCard__item">{{ product_name }}</div>
				<div class="orderCard__item">{{ user_name }}</div>
				<div class="orderCard__item">{{ address }}</div>
				<div class="orderCard__item">{{ date }}</div>
				<div class="orderCard__item">{{ pay_type }}</div>
				<div class="orderCard__item orderCard__item--status">
					{{ status }}
				
					<img v-if="!isStatusChanged" :src="CHANGE"  @click="changeStatus" alt="">
					<img v-else :src="ACCEPT" @click="saveStatus" alt="">
				</div>
				<div class="orderCard__item orderCard__item--delete">
					<img :src="DELETE" @click="openDelete" alt="">
				</div>
			</div>
		</div>
		<select v-model="newStatus" class="orderCard__select" :class="{ active: isStatusChanged }">
			<option value="Не начат">Не начат</option>
			<option value="В процессе">В процессе</option>
			<option value="Завершен">Завершен</option>
			<option value="Отклонен">Отклонен</option>
		</select>
		<Popup :isActive="deleteIsActive" @update:isActive="deleteIsActive = $event">
			<DeleteOrder
					:id="id"
					:isActive="deleteIsActive" @update:isActive="deleteIsActive = $event"
			/>
		</Popup>
	</div>
</template>

<script>
import {ref} from "vue";
import DELETE from "@/img/delete.png";
import CHANGE from "@/img/change.png";
import ACCEPT from "@/img/accept.png";
import {mapActions, mapGetters} from "vuex";
import Popup from "@/components/Popup";
import DeleteOrder from "@/components/forms/DeleteOrder";



export default {
	name: 'OrderCard',
	components: {DeleteOrder, Popup},
	props: {
		id: Number,
		product_name: String,
		user_name: String,
		address: String,
		date: Date,
		pay_type: String,
		status: String
	},
	setup() {
		const isStatusChanged = ref(false)
		
		const deleteIsActive = ref(false)
		
		const openDeletePopup = () => {
			deleteIsActive.value = true
		}
		
		return {
			isStatusChanged,
			openDeletePopup,
			deleteIsActive,
			newStatus: "Не начат",
			DELETE,
			CHANGE,
			ACCEPT
		}
	},
	computed: {
	
	},
	methods: {
		...mapActions({
			UPDATE_ORDER_STATUS: "products/UPDATE_ORDER_STATUS"
		}),
		changeStatus() {
			this.isStatusChanged = true
		},
		saveStatus() {
			try {
				console.log("карточка")
				const data = []
				data.id = this.id
				data.status = this.newStatus
				this.UPDATE_ORDER_STATUS(data)
				this.$emit('update-order-status');
				this.isStatusChanged = false
			} catch (err) {
				console.error(err)
			}
		},
		openDelete() {
			this.openDeletePopup()
		}
	},
	mounted() {
	},
}
</script>

<style lang="scss" scoped>
.orderCard {
	display: grid;
	grid-template-columns: auto 130px;
	gap: 1px;
	
	&__card {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		color: var(--white-color);
		background-color: rgba(31, 41, 55, 0.7);
		overflow: hidden;
		z-index: 10;
	}
	&__items {
		width: 100%;
		display: grid;
		grid-template-columns: 30px 10fr 6fr 13fr 5fr 5fr 140px 70px;
		align-items: center;
		gap: 1px;
	}
	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 65px;
		height: 100%;
		position: relative;
		background-color: var(--basic-color);
		border-radius: 5px;
		padding: 10px;
		
		&--status {
			display: flex;
			align-items: center;
			gap: 10px;
			
		}
		
		&--delete {
			display: flex;
			width: 100%;
			height: 100%;
		}
		
		&--delete,
		&--status {
			@media(hover: hover) {
				& img {
					transition: var(--defaultTransition);
				}
				
				&:hover {
					& img {
						transform: scale(1.2);
					}
				}
			}
			
			& img {
				width: 25px;
				height: 25px;
				object-fit: contain;
				flex-shrink: 0;
				cursor: pointer;
			}
		}
	}
	&__select {
		position: relative;
		background-color: var(--basic-color);
		border-radius: 10px;
		color: var(--white-color);
		padding: 0 10px;
		transform: translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: var(--defaultTransition);
		z-index: 5;
		
		&.active {
			transform: translateX(0);
			opacity: 1;
			pointer-events: all;
		}
	}
}
</style>
