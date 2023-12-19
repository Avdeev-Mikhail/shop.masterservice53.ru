<template>
	<v-app>
		<v-app-bar
			v-if="$vuetify.breakpoint.lgAndUp"
			app
			absolute
			color="white"
			height="64"
			elevation="2"
			class="header"
		>
			<v-container class="d-flex align-center">
				<div class="d-flex align-center flex-grow-1">
					<v-img
						alt="Vuetify Logo"
						class="shrink mr-2 rounded"
						contain
						src="@/assets/logo-bg-0.svg"
						transition="scale-transition"
						width="50"
					/>
					<div class="primary--text text-h5 font-weight-bold">МастерСервис</div>
					<v-btn
						color="yellow"
						class="ms-8"
						@click="showMenu = !showMenu"
					>
						<v-icon left v-text="showMenu ? 'mdi-close' : 'mdi-menu'"></v-icon>
						Каталог
					</v-btn>

					<v-text-field
						hide-details
						class="ms-5 me-5 header__search flex-grow-1"
						label="Поиск"
						placeholder="Поиск"
						solo
						flat
						dense
						@focus="searchOverlay = true"
						@blur="searchOverlay = false"
					/>
					<v-overlay
						:value="searchOverlay"
						@click="searchOverlay = false"
						style="height: 100vh"
						z-index="1"
						opacity="0.3"
					>
					</v-overlay>
				</div>

				<v-btn
					href="https://github.com/vuetifyjs/vuetify/releases/latest"
					class="vertical-button"
					plain
				>
					<v-icon>mdi-package-variant-closed</v-icon>
					Заказы
				</v-btn>
				<v-btn
					href="https://github.com/vuetifyjs/vuetify/releases/latest"
					class="vertical-button"
					plain
				>
					<v-icon>mdi-heart</v-icon>
					Избранное
				</v-btn>
				<v-btn
					href="https://github.com/vuetifyjs/vuetify/releases/latest"
					class="vertical-button"
					plain
				>
					<v-icon>mdi-cart</v-icon>
					Корзина
				</v-btn>
				<v-btn
					href="https://github.com/vuetifyjs/vuetify/releases/latest"
					class="vertical-button"
					plain
				>
					<v-icon>mdi-account</v-icon>
					Михаил
				</v-btn>
			</v-container>
		</v-app-bar>
		<v-app-bar
			height="auto"
			elevation="2"
			class="pb-2"
			v-if="$vuetify.breakpoint.mdAndDown"
		>
			<v-container class="d-flex gap-3 flex-column">
				<v-row class="d-flex align-center">
					<v-btn
						icon
						@click="drawer = !drawer"
					>
						<v-icon>mdi-menu</v-icon>
					</v-btn>
					<v-spacer></v-spacer>
					<v-img
						alt="Vuetify Logo"
						class="shrink mr-2 rounded"
						contain
						src="@/assets/logo-bg-0.svg"
						transition="scale-transition"
						width="50"
					/>
					<v-spacer></v-spacer>
					<v-btn icon>
						<v-icon>mdi-cart</v-icon>
					</v-btn>
				</v-row>
				<v-row>
					<v-text-field
						hide-details
						class="header__search flex-grow-1"
						label="Поиск"
						placeholder="Поиск"
						solo
						flat
						dense
						@focus="searchOverlay = true"
						@blur="searchOverlay = false"
					/>
				</v-row>
			</v-container>
		</v-app-bar>
		<CatalogMenu :active="showMenu"></CatalogMenu>
		<v-overlay
			:value="showMenu"
			@click="showMenu = !showMenu"
			z-index="1"
		></v-overlay>

		<v-navigation-drawer
			v-model="drawer"
			absolute
			temporary
		>
			<v-list
				nav
				dense
			>
				<v-list-item v-for="link in links" :key="link.title" link active-class="indigo--text">
					<v-list-item-icon>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ link.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main class="main">
			<v-container>
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import CatalogMenu from "@/components/CatalogMenu.vue";

export default {
	name: 'App',
	components: {
		CatalogMenu,
	},

	data: () => ({
		showMenu: false,
		searchOverlay: false,
		drawer: false,
		links: [
			{
				title: "Каталог",
				icon: "mdi-menu",
			},
			{
				title: "Заказы",
				icon: "mdi-package-variant-closed",
			},
			{
				title: "Избранное",
				icon: "mdi-heart",
			},
			{
				title: "Выйти",
				icon: "mdi-logout-variant",
			},
		],
	}),
};
</script>

<style lang="scss">

.header {
	z-index: 2 !important;
	&__search {
		z-index: 2;
		border: 1px solid #007D8C;
	}
}

.vertical-button {
	height: auto !important;
	padding-top: 5px !important;
	padding-bottom: 5px !important;
	.v-btn__content {
		display: flex;
		flex-direction: column;
		font-size: 10px;
	}
}

.gap-3 {
	gap: 12px;
}

</style>
