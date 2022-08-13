import React, { useEffect } from "react";
import AddSubscriptionLayout from "../layout/AddSubscriptionLayout";
import { ListCustomers, ListProducts } from "../resources/LoadData";
import { useQuery } from "react-query";
import _ from "lodash";

const AddSubscriptionPage = () => {
	const { isLoading, data: listCustomers } = useQuery(
		"listCustomers",
		ListCustomers
	);
	const { data: listProducts } = useQuery("listProducts", ListProducts);
	// useEffect(() => {
	// 	ListCustomers();
	// 	ListProducts();
	// }, []);
	console.log(listCustomers);
	console.log(listProducts);
	let listCustomersData = [];
	let listProductsData = [];
	let customersInfo = {};
	if (listCustomers && listProducts) {
		listCustomersData = _.map(listCustomers.data, (item) => {
			return {
				label: item[1] + " " + item[2],
				key: item[0],
			};
		});

		_.map(
			listCustomers.data,
			(item) => (customersInfo[item[0]] = item[1] + " " + item[2])
		);
		console.log(customersInfo);
		listProductsData = _.map(listProducts.data, (item) => {
			return {
				label: item[0],
				key: item[0],
			};
		});
	}

	if (isLoading) return <h1>Loading....</h1>;

	return (
		<AddSubscriptionLayout
			listProductsData={listProductsData}
			listCustomersData={listCustomersData}
			customersInfo={customersInfo}
		/>
	);
};

export default AddSubscriptionPage;
