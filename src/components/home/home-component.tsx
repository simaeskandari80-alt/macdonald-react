import { useState } from "react";
import MenuComponent from "../menu/menu-component";
import ReciptComponent from "../recipt/recipt-component";

function HomeComponent() {
	const [totalPrice, setTotalPrice] = useState(0);
	return (
		<div className="w-full h-screen bg-primary p-4 flex flex-col md:flex-row items-start gap-10 ">
			<MenuComponent setTotalPrice={() => setTotalPrice(totalPrice)} />
			<ReciptComponent totalPriceProps={totalPrice} />
		</div>
	);
}

export default HomeComponent;
