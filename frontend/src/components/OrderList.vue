<template>
	<div>
		<router-link :to="{ name: 'Create' }" class="button is-success mt-5"
		>Add New
		</router-link
		>
		<table class="table is-striped is-bordered mt-2 is-fullwidth">
			<thead>
			<tr>
				<th>Номер заказа</th>
				<th>Наименование</th>
				<th>Пользователь</th>
				<th>Адрес доставки</th>
				<th>Дата</th>
				<th>Тип оплаты</th>
				<th>Статус</th>
				<th class="has-text-centered">Actions</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in items" :key="item.order_id">
				<td>{{ item.order_id }}</td>
				<td>{{ item.product_name }}</td>
				<td>{{ item.user_name }}</td>
				<td>{{ item.order_address }}</td>
				<td>{{ item.order_date.split('T')[0] }}</td>
				<td>{{ item.order_pay_type }}</td>
				<td>{{ item.order_status }}</td>
				<td class="has-text-centered">
					<router-link
							:to="{ name: 'Edit', params: { id: item.order_id } }"
							class="button is-info is-small"
					>Edit
					</router-link
					>
					<a
							class="button is-danger is-small"
							@click="deleteOrder(item.order_id)"
					>Delete</a
					>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import axios from 'axios';

import { ref, onMounted } from 'vue';

const items = ref([]);

const getOrders = async () => {
	try {
		const response = await axios.get("http://localhost:5000/orders");
		items.value = response.data;
		console.log(items.value);
	} catch (err) {
		console.log(err);
	}
}

const deleteOrder = async (id) => {
	try {
		await axios.delete(`http://localhost:5000/orders/${id}`);
		getOrders();
	} catch (err) {
		console.log(err);
	}
}

onMounted(() => {
	getOrders();
});
</script>

<style></style>
