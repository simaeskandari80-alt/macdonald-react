import HeaderMenuComponent from "../header-menu/header-menu-component";
import ProductMenuComponent from "../product-menu/product-menu-component";

function MenuComponent() {
	return (
		<div className="bg-secondary py-6 px-4 w-full md:w-3/4 flex flex-col items-center gap-4">
			<HeaderMenuComponent />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-2 h-[60vh] md:h-[80vh] overflow-auto overflow-y-scroll">
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
				<ProductMenuComponent />
			</div>
		</div>
	);
}

export default MenuComponent;
