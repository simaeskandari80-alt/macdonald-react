import type { ProductMenuComponentProps } from "../product-menu/product-menu-component";
// type ReciptComponentProp = {
// 	totalPrice:number;
// 	products?: ProductMenuComponentProps;
// 	count?:number;
// };
export default function ReciptComponent() {
	return (
		<div className="bg-secondary w-full md:w-1/4 p-4 rounded-2xl">
			<div className="flex flex-col gap-20">
				<div className="flex flex-col gap-3">
					<div className=" flex justify-between items-center w-full">
						<p>جمع کل سفارشات :</p>
						<p>4000 تومان</p>
					</div>
					<div className=" flex justify-between items-center w-full">
						<p>حق سرویس و کارمزد :</p>
						<p>1200تومان</p>
					</div>
					<div className=" flex justify-between items-center w-full">
						<p>تخفیف :</p>
						<p>6000 تومان</p>
					</div>

					<div className="flex items-center justify-center">
						<input
							type="text"
							className=" bg-gray-200 w-full rounded-r-md py-2"
						/>
						<button className="bg-button rounded-l-md p-2">✔</button>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="bg-price flex justify-between items-center rounded-md px-1 py-1.5">
						<p>مبلغ قابل پرداخت</p>
						<p>35200 تومان</p>
					</div>
					<div>
						<button className="bg-button text-center py-2  text-white w-full rounded-md">
							ثبت سفارش
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
