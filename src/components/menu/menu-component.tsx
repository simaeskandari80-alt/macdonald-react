import HeaderMenuComponent from "../header-menu/header-menu-component";
import ProductMenuComponent from "../product-menu/product-menu-component";
const products = [
	{
		id: 1,
		title: "همبرگر مخصوص",
		price: 10000,
		image: "./src/assets/img/Berguer.jpg",
		count: 0,
	},
	{
		id: 2,
		title: "همبرگر معمولی",
		price: 8000,
		image: "./src/assets/img/Berguer.jpg",
		count: 0,
	},
	{
		id: 3,
		title: "همبرگر مخصوص قارچ و پنیر",
		price: 20000,
		image: "./src/assets/img/Berguer.jpg",
		count: 0,
	},
	{
		id: 4,
		title: "همبرگر معمولی با قارچ و پنیر",
		price: 10000,
		image: "./src/assets/img/Berguer.jpg",
		count: 0,
	},
	{
		id: 5,
		title: "سیب زمینی سرخ کرده",
		price: 10000,
		image: "./src/assets/img/french_fries.png",
		count: 0,
	},
	{
		id: 6,
		title: "سیب زمینی سرخ کرده ویژه",
		price: 25000,
		image: "./src/assets/img/french_fries.png",
		count: 0,
	},
	{
		id: 7,
		title: "نوشابه",
		price: 5000,
		image: "./src/assets/img/soda.png",
		count: 0,
	},
	{
		id: 8,
		title: "نوشابه رژیمی",
		price: 6000,
		image: "./src/assets/img/soda.png",
		count: 0,
	},
	{
		id: 9,
		title: "سالاد سزار",
		price: 25000,
		image: "./src/assets/img/salad.png",
		count: 0,
	},
	{
		id: 10,
		title: "سالاد فصل",
		price: 8000,
		image: "./src/assets/img/salad.png",
		count: 0,
	},
];
function MenuComponent({
	setTotalPrice,
}: {
	setTotalPrice: (price: number) => void;
}) {
	function handleTotalPrice(count: number, price: number) {
		setTotalPrice(count * price);
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
						count={product.count}
						onCountChang={() => handleTotalPrice(product.count, product.price)}
					/>
				))}
			</div>
		</div>
	);
}

export default MenuComponent;
