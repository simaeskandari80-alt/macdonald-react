import { useEffect, useState } from "react";
// type ReciptComponentProp = {
// 	totalPrice:number;
// 	products?: ProductMenuComponentProps;
// 	count?:number;
// };
export default function ReciptComponent({
	totalPriceProps,
}: {
	totalPriceProps: number;
}) {
	const [text, setText] = useState("");
	const [discount, setDiscount] = useState(0);

	const [finalPrice, setFinalPrice] = useState(
		totalPriceProps + totalPriceProps * 0.09
	);

	function isTextDiscountCode() {
		switch (text) {
			case "gold":
				setFinalPrice(
					totalPriceProps - totalPriceProps * 0.3 + totalPriceProps * 0.09
				);
				setDiscount(totalPriceProps * 0.3);
				break;
			case "silver":
				setFinalPrice(
					totalPriceProps - totalPriceProps * 0.2 + totalPriceProps * 0.09
				);
				setDiscount(totalPriceProps * 0.2);
				break;
			case "bronze":
				setFinalPrice(
					totalPriceProps - totalPriceProps * 0.1 + totalPriceProps * 0.09
				);
				setDiscount(totalPriceProps * 0.1);
				break;
			default:
				setDiscount(0);
				setFinalPrice(finalPrice);
				break;
		}
	}
	return (
		<div className="bg-secondary w-full md:w-1/4 p-4 rounded-2xl">
			<div className="flex flex-col gap-20">
				<div className="flex flex-col gap-3">
					<div className=" flex justify-between items-center w-full">
						<p>جمع کل سفارشات :</p>
						<p>{totalPriceProps}تومان</p>
					</div>
					<div className=" flex justify-between items-center w-full">
						<p>حق سرویس و کارمزد :</p>
						<p>{totalPriceProps * 0.09}تومان</p>
					</div>
					<div className=" flex justify-between items-center w-full">
						<p>تخفیف :</p>
						<p>{discount}تومان</p>
					</div>

					<div className="flex items-center justify-center">
						<input
							type="text"
							className=" bg-gray-200 w-full rounded-r-md py-2 px-3"
							value={text}
							onChange={(e) => {
								setText(e.target.value), console.log(text);
							}}
						/>
						<button
							className="bg-button rounded-l-md p-2"
							onClick={isTextDiscountCode}
						>
							✔
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="bg-price flex justify-between items-center rounded-md px-1 py-1.5">
						<p>مبلغ قابل پرداخت</p>
						<p>
							{finalPrice === 0
								? totalPriceProps + totalPriceProps * 0.09
								: Math.round(finalPrice)}
						</p>
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
