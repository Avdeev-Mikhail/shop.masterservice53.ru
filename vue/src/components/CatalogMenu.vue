<template>
	<v-slide-y-transition>
				
				<div v-if="active" class="menu">
					<v-container>
						<v-row>
							<v-col cols="2">
								<div class="menu__sidebar">
									<v-list dense>
										<v-list-item-group
											v-model="tab"
											color="primary"
										>
											<v-list-item
												v-for="(item, i) in items"
												:key="i"
												@mouseenter="tab = i"
											>
												<v-list-item-content>
													<v-list-item-title v-text="item.text"></v-list-item-title>
												</v-list-item-content>
												<v-list-item-icon>
													<v-icon>mdi-chevron-right</v-icon>
												</v-list-item-icon>
											</v-list-item>
										</v-list-item-group>
									</v-list>
								</div>
							</v-col>
							<v-col>
								<template v-for="(item, i) in items">
									<div class="menu__content"  :key="i" v-if="tab == i">
										<div class="text-h5">{{ item.text }}</div>
									</div>
								</template>
							</v-col>
						</v-row>
					</v-container>
				</div>
	</v-slide-y-transition>
</template>

<script>
	export default {
		props: {
			active: { type: Boolean }
		},
		data: () => ({
			tab: 0,
			items: [
				{ text: 'Б/У товары' },
				{ text: 'Чехлы' },
				{ text: 'Зарядные устройства' },
				{ text: 'Запчасти для электронных устройств' },
				{ text: 'Запчасти для мобильных устройств' },
				{ text: 'Запчасти для планшетных ПК, игровых консолей' },
				{ text: 'Запчасти для ноутбуков' },
				{ text: 'Запчасти для Apple' },
				{ text: 'Попсокеты' },
				{ text: 'Ремешки и браслеты для Apple Watch' },
				{ text: 'Картридеры' },
				{ text: 'Носители информации' },
				{ text: 'Колонки' },
				{ text: 'Аккумуляторные батареи, элементы питания' },
				{ text: 'Держатели' },
				{ text: 'Разное' },
				{ text: 'USB-кабели, адаптеры (USB, AUX, HDMI)' },
				{ text: 'Гарнитуры, наушники' },
				{ text: 'Сумки, чехлы, накладки, бамперы' },
				{ text: 'Защитные пленки и стекла' },
				{ text: 'Зарядные устройства' },
				{ text: 'Клеевые пистолеты' },
				{ text: 'Микроскопы' },
				{ text: 'Станки и инструменты для ремонта дисплеев' },
				{ text: 'Кабели, провода, щупы' },
			],
		}),
		methods: {
		}
	}
</script>

<style lang="scss">

.menu {
	position: absolute;
	top: 64px;
	width: 100%;
	display: flex;
	gap: 20px;
	background-color: #fff;
	left: 0;
	height: auto;
	z-index: 2;

	&__sidebar {
		border-right: 1px solid #eee;
	}
}

</style>