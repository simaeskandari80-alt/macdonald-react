export type ProductMenuComponentProps = {
	title: string;
	price: number;
	image: string;
	count: number;
	onCountChang: (count: number) => void;
};
function ProductMenuComponent(props: ProductMenuComponentProps) {
	// const [count, setCount] = useState(0);
	function handleIncreasment() {
		props.onCountChang(props.count + 1);
	}
	function handleDecreasment() {
		if (props.count > 0) {
			props.onCountChang(props.count - 1);
		}
	}
	return (
		<div className="bg-secondary w-full">
			<div className="bg-[#dff3fe] flex items-end justify-between p-4 rounded-2xl">
				<div className="flex items-center justify-center gap-4">
					<div>
						<img src={props.image} alt={props.title} className="w-20 h-20" />
					</div>
					<div className="flex flex-col items-start gap-2">
						<div>{props.title}</div>
						<div>{props.price}تومان</div>
						<div className="flex items-center justify-center gap-1">
							<button
								className="bg-button rounded-r-sm text-white  pb-1 w-6 text-center"
								onClick={handleIncreasment}
							>
								+
							</button>
							<span className="w-6 text-center">{props.count}</span>
							<button
								className="bg-button rounded-l-sm text-white  pb-1 w-6 text-center"
								onClick={handleDecreasment}
							>
								-
							</button>
						</div>
					</div>
				</div>
				<div>{props.count * props.price}تومان</div>
			</div>
		</div>
	);
}

export default ProductMenuComponent;
