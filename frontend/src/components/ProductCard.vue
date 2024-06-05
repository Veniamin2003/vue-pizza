<template>
	<div class="productCard">
		<div class="productCard__card">
			<div class="productCard__items">
				<div class="productCard__item">{{ id }}</div>
				<div class="productCard__item">
					<img :src="img" class="productCard__picture" alt="Product">
				</div>
				<div class="productCard__item">{{ name }}</div>
				<div class="productCard__item">{{ description }}</div>
				<div class="productCard__item">{{ price }}</div>
				<div class="productCard__item productCard__item--status">
					<img  :src="CHANGE"  @click="openEdit" alt="">
				</div>
				<div class="productCard__item productCard__item--delete">
					<img :src="DELETE" @click="openDelete" alt="">
				</div>
			</div>
		</div>
		<Popup :isActive="editIsActive" @update:isActive="editIsActive = $event">
			<EditProduct
					:id="id"
					:img="img"
					:name="name"
					:description="description"
					:price="price"
					:isActive="editIsActive" @update:isActive="editIsActive = $event"
			/>
		</Popup>
		<Popup :isActive="deleteIsActive" @update:isActive="deleteIsActive = $event">
			<DeleteProduct
					:id="id"
					:isActive="deleteIsActive" @update:isActive="deleteIsActive = $event"
			/>
		</Popup>
	</div>
	
</template>

<script>
import { ref } from "vue";
import DELETE from "@/img/delete.png";
import CHANGE from "@/img/change.png";
import ACCEPT from "@/img/accept.png";
import EditProduct from "@/components/forms/EditProduct";
import Popup from "@/components/Popup";
import DeleteProduct from "@/components/forms/DeleteProduct";

export default {
	name: 'ProductCard',
	components: {DeleteProduct, Popup, EditProduct},
	props: {
		id: Number,
		name: String,
		description: String,
		price: Number,
		img: String
	},
	
	setup() {
		const editIsActive = ref(false)
		const deleteIsActive = ref(false)
		
		const openEditPopup = () => {
			editIsActive.value = true
		}
		
		const openDeletePopup = () => {
			deleteIsActive.value = true
		}
		
		return {
			editIsActive,
			openEditPopup,
			deleteIsActive,
			openDeletePopup,
			DELETE,
			CHANGE,
			ACCEPT
		}
	},
	computed: {
	
	},
	methods: {
		openEdit() {
			this.openEditPopup()
		},
		openDelete() {
			this.openDeletePopup()
		}
	}
}
</script>

<style lang="scss" scoped>
.productCard {
	
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
		grid-template-columns: 30px 125px 6fr 15fr 3fr 70px 70px;
		align-items: center;
		gap: 1px;
	}
	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
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
	&__picture {
		border-radius: 10px;
	}
}
</style>
