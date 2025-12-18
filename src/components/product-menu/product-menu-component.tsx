function ProductMenuComponent() {
	return (
		<div className="bg-secondary w-full">
			<div className="bg-[#dff3fe] flex items-end justify-between p-4 rounded-2xl">
				<div className="flex items-center justify-center gap-4">
					<div>
						<img
							src="src/assests/image/Berguer.jpg"
							alt="food"
							className="w-20 h-20"
						/>
					</div>
					<div className="flex flex-col items-start gap-2">
						<div>همبرگر مخصوص</div>
						<div>1000تومان</div>
						<div className="flex items-center justify-center gap-1">
							<button className="bg-button rounded-r-sm text-white  pb-1 w-6 text-center">
								+
							</button>
							<span className="w-6 text-center">0</span>
							<button className="bg-button rounded-l-sm text-white  pb-1 w-6 text-center">
								-
							</button>
						</div>
					</div>
				</div>
				<div>2000تومان</div>
			</div>
		</div>
	);
}

export default ProductMenuComponent;
