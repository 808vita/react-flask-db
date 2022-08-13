import _ from "lodash";
import moment from "moment";

export const ProcessGroupedByProduct = (data) => {
	let productList = [];
	let priceList = [];
	let startDate;
	let endDate;
	const today = moment(new Date()).format("YYYY-MM-DD");
	console.log(
		_.chain(data)
			.map((value, key) => {
				productList.push(key);

				priceList.push(
					_.sum(
						_.map(value, (item) =>
							// startDate = moment(item.startDate, "YYYY-MM-DD");
							// endDate = moment(item.endDate, "YYYY-MM-DD");
							// console.log(moment.duration(startDate.diff(endDate)).asDays());
							{
								const startToEnd =
									(item.price *
										item.usersCount *
										moment(item.endDate, "YYYY-MM-DD").diff(
											moment(item.startDate, "YYYY-MM-DD"),
											"days"
										)) /
									365;

								const startToNow =
									(item.price *
										item.usersCount *
										moment(today, "YYYY-MM-DD").diff(
											moment(item.startDate, "YYYY-MM-DD"),
											"days"
										)) /
									365;

								if (
									moment(item.startDate).isSameOrBefore(today) &&
									startToEnd <= startToNow
								) {
									return startToEnd;
								} else if (
									moment(item.startDate).isSameOrBefore(today) &&
									startToEnd > startToNow
								) {
									return startToNow;
								} else {
									return 0;
								}
							}
						)
					)
				);
			})
			.value()
	);
	console.log(productList);
	console.log(priceList);

	return [productList, priceList];
};
