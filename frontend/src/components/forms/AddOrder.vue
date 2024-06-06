<template>
	<div>
		<h2>Оформление заказа - {{ title }}</h2>
		<div class="content">
			<p>На сумму : {{price}}</p>
		</div>
		<div class="flex flex-col gap-3">
			<input v-model="addressDelivery" type="text" placeholder="Введите адрес доставки" />
			<select v-model="paymentMethod">
				<option value="Картой курьеру">Картой курьеру</option>
				<option value="Наличными">Наличными</option>
			</select>
			<div class="checkbox">
				<input v-model="generateCheck" type="checkbox" id="generate-check" />
				<label for="generate-check">Сформировать чек</label>
			</div>
		</div>
		
		<div class="actions">
			<button @click="confirmPopup()">Отправить</button>
			<button @click="cancelPopup()">Отменить</button>
		</div>
	</div>
</template>
<script>

import Popup from "@/components/Popup";
import jsPDF from 'jspdf';


export default {
	name: 'AddOrder',
	props: {
		isActive: {type: Boolean},
		id: Number,
		title: String,
		desc: String,
		price: Number,
		img: String,
	},
	components: {
		Popup
	},
	data() {
		return {
			paymentMethod: 'Наличными',
			addressDelivery: "",
			generateCheck: false,
		};
	},
	setup() {},
	methods: {
		confirmPopup() {
			let data = []
			data.paymentMethod = this.paymentMethod
			data.addressDelivery = this.addressDelivery
			if (this.generateCheck) {
				this.generatePdf()
			}
			this.$emit('addOrder', data);
			this.$emit('update:isActive', false);
		},
		cancelPopup() {
			this.$emit('update:isActive', false);
		},
		generatePdf() {
			// let curDate = new Date();
			// curDate = `${curDate.getFullYear()}-${String(curDate.getMonth() + 1).padStart(2, '0')}-${String(curDate.getDate()).padStart(2, '0')}`;
			
			const doc = new jsPDF();
			doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
			doc.setFont('Roboto-Regular');
			// Добавляем заголовок
			doc.setFontSize(24);
			doc.text(`Cost: ${this.price} rub.`, 10, 20);
			
			// Добавляем описание
			doc.setFontSize(18);
			doc.text(`Cost: ${this.desc} rub.`, 10, 40);
		
			
			// Создаем PDF-документ
			const pdf = doc.output('blob');
			
			// Создаем ссылку для скачивания PDF-документа
			const link = document.createElement('a');
			link.href = URL.createObjectURL(pdf);
			link.download = `order_${this.id}.pdf`;
			link.click();
		}
	}
}
</script>
<style lang="scss" scoped>

</style>
