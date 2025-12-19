import HeaderMenuComponent from "../header-menu/header-menu-component";
import ProductMenuComponent from "../product-menu/product-menu-component";
const products = [
	{
		id: 1,
		title: "همبرگر مخصوص",
		price: 10000,
		image: "./src/assets/img/Berguer.jpg",
	},
	{
		id: 2,
		title: "همبرگر معمولی",
		price: 8000,
		image: "./src/assets/img/Berguer.jpg",
	},
	{
		id: 3,
		title: "همبرگر مخصوص قارچ و پنیر",
		price: 20000,
		image: "./src/assets/img/Berguer.jpg",
	},
	{
		id: 4,
		title: "همبرگر معمولی با قارچ و پنیر",
		price: 10000,
		image: "./src/assets/img/Berguer.jpg",
	},
	{
		id: 5,
		title: "سیب زمینی سرخ کرده",
		price: 10000,
		image: "./src/assets/img/french_fries.png",
	},
	{
		id: 6,
		title: "سیب زمینی سرخ کرده ویژه",
		price: 25000,
		image: "./src/assets/img/french_fries.png",
	},
	{
		id: 7,
		title: "نوشابه",
		price: 5000,
		image: "./src/assets/img/soda.png",
	},
	{
		id: 8,
		title: "نوشابه رژیمی",
		price: 6000,
		image: "./src/assets/img/soda.png",
	},
	{
		id: 9,
		title: "سالاد سزار",
		price: 25000,
		image: "./src/assets/img/salad.png",
	},
	{
		id: 10,
		title: "سالاد فصل",
		price: 8000,
		image: "./src/assets/img/salad.png",
	},
];
function MenuComponent({ setTotalPrice }: { setTotalPrice: () => void }) {
	function handleTotalPrice() {
		setTotalPrice();
	}
	return (
		<div className="bg-secondary py-6 px-4 w-full md:w-3/4 flex flex-col items-center gap-4 rounded-xl">
			<HeaderMenuComponent />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-2 h-[60vh] md:h-[80vh] overflow-auto overflow-y-scroll rounded-xl">
				{products.map((product) => (
					<ProductMenuComponent
						key={product.id}
						image={product.image}
						title={product.title}
						price={product.price}
					/>
				))}
			</div>
		</div>
	);
}

export default MenuComponent;
