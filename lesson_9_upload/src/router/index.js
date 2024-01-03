import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import ShopPage from "../views/ShopPage.vue";
import ShopCategory from "../views/ShopCategory.vue";
import PaymentRules from "../views/PaymentRules.vue";
import OurContacts from "../views/OurContacts.vue";

const routes = [
	{
		path: "/",
		name: "main",
		component: MainPage,
	},
	{
		path: "/shop/",
		name: "shop",
		component: ShopPage,
	},
	{
		path: "/shop/:category",
		name: "category",
		component: ShopCategory,
	},
	{
		path: "/payment",
		name: "payment",
		component: PaymentRules,
	},
	{
		path: "/contacts",
		name: "contacts",
		component: OurContacts,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
