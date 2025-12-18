import MenuComponent from "../menu/menu-component";
import ReciptComponent from "../recipt/recipt-component";

function HomeComponent() {
	return (
		<div className="w-full h-screen bg-primary p-4 flex flex-col md:flex-row items-start gap-10 ">
			<MenuComponent />
			<ReciptComponent />
		</div>
	);
}

export default HomeComponent;
