<template>
	<v-row class="mt-3">
		<v-col
			cols="6"
			v-for="i in 10"
			:key="i"
			lg="2"
			md="3"
			sm="4"
		>
			<v-card class="pb-4" flat :to="{ name: 'about' }">
				<v-tooltip
					top
					nudge-bottom="10"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							icon
							plain
							absolute
							top
							right
							v-on="on"
							v-bind="attrs"
							class="card__like"
						>
							<v-icon>mdi-cards-heart-outline</v-icon>
						</v-btn>
					</template>
					<span>Добавить в избранное</span>
				</v-tooltip>
				<v-img src="@/assets/test.webp" height="200" contain></v-img>
				<div class="d-flex align-center flex-wrap">
					<v-card-title class="card__price text-sm-h6 pb-2 pb-sm-5">6 690 ₽</v-card-title>
					<div class="text-decoration-line-through text-caption grey--text pt-2 pt-sm-0">8 500 ₽</div>
				</div>
				<v-card-text class="card__title pt-0 pb-0 black--text">
					Наушники беспроводные большие игровые с микрофоном Logitech G G435 черные
					Наушники беспро adsa das d
				</v-card-text>
				<v-card-actions>
					<v-btn color="yellow" block @click.prevent="loading = true" :loading="i == 1 && loading">В корзину</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>

export default {
	components: {
	},
	data () {
		return {
			loading: false,
		}
	}
}

</script>

<style lang="scss">


.card {
	&__like {
		z-index: 1;
	}
	&__price {
		@media (max-width: 600px) {
			font-size: 16px !important;
		}
	}
	&__title {
		display: block;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* количество строк */
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		@media (max-width: 600px) {
			font-size: 13px;
			line-height: 1.3;
		}
	}
}

</style>