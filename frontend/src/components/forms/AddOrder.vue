<template>
	<div class="order-form">
		<div class="order-form__top">
			<div class="order-form__head">
				<h2 class="order-form__title">Оформление заказа</h2>
				<div class="order-form__name">Пицца: {{ title }}</div>
			</div>
			
			<div class="order-form__content">
				<div class="order-form__fields">
					<input v-model="addressDelivery" type="text" placeholder="Введите адрес доставки" />
					<select v-model="paymentMethod">
						<option value="Картой курьеру">Картой курьеру</option>
						<option value="Наличными">Наличными</option>
					</select>
				</div>
				
				<div class="order-form__info">
					<div class="order-form__checkbox">
						<input v-model="generateCheck" type="checkbox" id="generate-check" />
						<label for="generate-check">Сформировать чек</label>
					</div>
					<div class="order-form__price">
						<p>На сумму : {{price}} рублей</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="actions">
			<Button name="Отправить" @click="confirmPopup()"/>
			<Button name="Отменить" color="#D5989980" @click="cancelPopup()"></Button>
		</div>
	</div>
</template>
<script>

import Popup from "@/components/Popup";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Button from "@/components/btns/Button";


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
		Button,
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
			const curDate = new Date().toLocaleString('ru-RU', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit'
			});
			
			const doc = new jsPDF();
			doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
			doc.addFont('Roboto-Bold.ttf', 'Roboto-Bold', 'bold');
			
			// Добавляем логотип
			doc.addImage('logo.png', 'PNG', 10, 10, 20, 20);
			
			// Заголовок
			doc.setFont('Roboto-Regular');
			doc.setFontSize(24);
			doc.text('Детали заказа', 40, 20);
			
			// Описание заказа
			doc.setFont('Roboto-Regular');
			doc.setFontSize(14);
			doc.text(`Наименование: ${this.title}`, 10, 40);
			doc.text(`Дата и время заказа: ${curDate}`, 10, 50);
			doc.text(`Сумма заказа: ${this.price} рублей.`, 10, 60);
			
			// Разделитель
			doc.setLineWidth(0.5);
			doc.line(10, 70, 200, 70);
			
			// Подробное описание
			const text = `Подробное описание: ${this.desc}`;
			const startX = 10;
			const startY = 80;
			const maxWidth = 125; // ширина текстового блока
			const lines = doc.splitTextToSize(text, maxWidth);
			
			for (let i = 0; i < lines.length; i++) {
				doc.text(startX, startY + (i * 10), lines[i]);
			}
			
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
.order-form {
	max-width: 400px;
	margin: 40px auto;
	display: flex;
	flex-direction: column;
	gap: 30px;
	
	&__top {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}
	&__head {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: center;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	&__name {
		font-size: 18px;
	}
	
	&__title {
		font-weight: bold;
		font-size: 24px;
	
		color: #333;
	}
	
	&__price {
		p {
			font-size: 16px;
			font-weight: 600;
			color: #666;
		}
	}
	
	&__fields {
		display: flex;
		flex-direction: column;
		gap: 10px;
		
		input[type="text"],
		select {
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;
			width: 100%;
		}
	}
	
	&__info {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	&__checkbox {
		display: flex;
		align-items: center;
		
		input[type="checkbox"] {
			display: none;
		}
		
		label {
			position: relative;
			padding-left: 25px;
			cursor: pointer;
			font-size: 16px;
			color: #666;
		}
		
		label:before {
			content: "";
			position: absolute;
			left: 0;
			top: 3px;
			width: 20px;
			height: 20px;
			border: 1px solid #ccc;
			border-radius: 2px;
			background-color: #fff;
			
		}
		
		label:after {
			content: "";
			position: absolute;
			left: 5px;
			top: 8px;
			width: 10px;
			height: 10px;
			background-color: rgb(99, 102, 241);
			border-radius: 2px;
			transform: scale(0);
			transition: transform 0.2s;
		}
		
		input[type="checkbox"]:checked + label:after {
			transform: scale(1);
		}
	}
	
	.actions {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
}
</style>
