<template>
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="inner">
			<div class="inner__title">Мои заказы</div>
			<div class="inner__orders">
				<div class="inner__header">
					<div>№</div>
					<div>Наименование</div>
					<div>Адрес доставки</div>
					<div>Дата</div>
					<div>Тип оплаты</div>
					<div>Статус</div>
				</div>
				<TransitionGroup name="list" tag="div" class="inner__cards">
					<div v-for="item in CURRENT_USER_ORDERS"
					     :key="item.order_id"
					     class="inner__wrapper"
					>
						<OrderCard
								:id="item.order_id"
								:product_name="item.product_name"
								:user_name="item.user_name"
								:address="item.order_address"
								:date="item.order_date.split('T')[0] "
								:pay_type="item.order_pay_type"
								:status="item.order_status"
								:isFullSuccess=false
						/>
					</div>
				</TransitionGroup>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import OrderCard from "@/components/OrderCard";

export default {
	name: 'UserOrders',
	components: {OrderCard},
	setup() {
		// let filteredOrders = this.USER_ORDERS
		return {
			filteredOrders: []
		}
	},
	computed: {
		...mapGetters({
			ORDERS: "products/ORDERS",
			CURRENT_USER: "products/CURRENT_USER",
			CURRENT_USER_ORDERS: "products/CURRENT_USER_ORDERS"
		}),
	},
	methods: {
		...mapActions({
			GET_ORDERS: "products/GET_ORDERS"
		}),
	},
	mounted() {
		this.GET_ORDERS();
		// debugger
		// this.filteredOrders = this.ORDERS.filter(order => order.user_id === 2 );
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
		grid-template-columns: 30px 10fr 13fr 5fr 5fr 140px;
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
			width: calc(100%);
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
}

</style>
