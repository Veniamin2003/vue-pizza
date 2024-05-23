<template>
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<!--		<router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add New</router-link>-->
		
		
		<div class="inner">
			<div class="inner__title">Заказы</div>
			<div class="inner__orders">
				<div class="inner__header">
					<div>№</div>
					<div>Наименование</div>
					<div>Пользователь</div>
					<div>Адрес доставки</div>
					<div>Дата</div>
					<div>Тип оплаты</div>
					<div>Статус</div>
				</div>
				<div class="inner__cards">
					<div v-for="item in ORDERS"
					     :key="item.order_id"
					     class="inner__wrapper"
					>
						<div class="inner__card">
							<div class="card__items">
								<div class="card__item">{{ item.order_id }}</div>
								<div class="card__item">{{ item.product_name }}</div>
								<div class="card__item">{{ item.user_name }}</div>
								<div class="card__item">{{ item.order_address }}</div>
								<div class="card__item">{{ item.order_date.split('T')[0] }}</div>
								<div class="card__item">{{ item.order_pay_type }}</div>
								<div class="card__item card__item--status">
									{{ item.order_status }}
									<img v-if="isStatusChanged" :src="ACCEPT" alt="">
									<img v-else :src="CHANGE" alt="">
								</div>
								<div class="card__item card__item--delete">
									<img :src="DELETE" alt="">
								</div>
							</div>
						</div>
						<select v-model="orderStatus" class="inner__select">
							<option value="Не начат">Не начат</option>
							<option value="В процессе">В процессе</option>
							<option value="Завершен">Завершен</option>
							<option value="Отклонен">Отклонен</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {ref} from "vue";
import DELETE from "/src/img/delete.png"
import CHANGE from "/src/img/change.png"
import ACCEPT from "/src/img/accept.png"

export default {
	name: 'OrderList',
	components: {},
	setup() {
		
		const isStatusChanged = ref(false)
		
		const closeSelectStatus = () => {
			isStatusChanged.value = false
		}
		
		return {
			isStatusChanged,
			closeSelectStatus,
			orderStatus: "Не начат",
			DELETE,
			CHANGE,
			ACCEPT
		}
	},
	computed: {
		...mapGetters({
			ORDERS: "products/ORDERS",
		}),
	},
	methods: {
		...mapActions({
			GET_ORDERS: "products/GET_ORDERS"
		})
	},
	mounted() {
		this.GET_ORDERS();
	},
}
</script>

<style lang="scss" scoped>
.inner {
	margin-top: 35px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	
	
	&__title {
		font-size: 45px;
		font-weight: 600;
	}
	&__orders {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&__header {
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 30px 10fr 6fr 13fr 5fr 5fr 140px 70px 135px;
		justify-items: center;
		align-items: center;
		gap: 1px;
		font-size: 14px;
		font-weight: 600;
		//border-bottom: 2px solid rgba(31, 41, 55, 0.7);
		padding-bottom: 7px;
		
		&:after {
			position: absolute;
			content: "";
			bottom: 0;
			left: 0;
			width: calc(100% - 131px);
			height: 2px;
			background-color: rgba(31, 41, 55, 0.7);
			border-radius: 1px;
		}
	}
	
	&__cards {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	
	&__wrapper {
		display: grid;
		grid-template-columns: auto 130px;
		gap: 1px;
	}
	
	&__card {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		//border: 1px solid var(--primary-dark-70-color);
		color: var(--white-color);
		background-color: rgba(31, 41, 55, 0.7);
		margin: -1px 0;
		overflow: hidden;
	}
	
	&__select {
		background-color: var(--basic-color);
		border-radius: 10px;
		color: var(--white-color);
		padding: 0 10px;
	}
}

.card {
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
}

</style>
