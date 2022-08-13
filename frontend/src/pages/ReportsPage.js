import React from "react";
import ReportsLayout from "../layout/ReportsLayout";
import { useQuery } from "react-query";
import {
	ListCustomers,
	ListProducts,
	ListSubscriptions,
	ReportsData,
} from "../resources/LoadData";
import _ from "lodash";

const ReportsPage = () => {
	const { data: reportsData } = useQuery("reportsData", ReportsData);

	let formattedData = [];
	let GroupedByCustomer = [];
	let GroupedByProduct = [];
	if (Array.isArray(reportsData?.data)) {
		console.log(reportsData?.data);
		formattedData = _.chain(reportsData?.data)
			.map((item) => {
				return {
					product: item[0],
					price: item[1],
					customerName: item[2],
					usersCount: item[3],
					startDate: item[4],
					endDate: item[5],
				};
			})
			.value();
		console.log(formattedData);

		GroupedByCustomer = _.groupBy(formattedData, "customerName");
		console.log(GroupedByCustomer);

		GroupedByProduct = _.groupBy(formattedData, "product");
		console.log(GroupedByProduct);

		return (
			<ReportsLayout
				GroupedByProduct={GroupedByProduct}
				GroupedByCustomer={GroupedByCustomer}
			/>
		);
	} else {
		return <h2>Loading...</h2>;
	}
};

export default ReportsPage;
