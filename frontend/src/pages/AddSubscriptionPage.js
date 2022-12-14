import React, { useEffect } from "react";
import AddSubscriptionLayout from "../layout/AddSubscriptionLayout";
import { ListCustomers, ListProducts } from "../resources/LoadData";
import { useQuery, useMutation } from "react-query";
import _ from "lodash";
import { LoadingMessage } from "../components/Messages";
const AddSubscriptionPage = () => {
	const { isLoading, data: listCustomers } = useQuery(
		"listCustomers",
		ListCustomers
	);
	const { data: listProducts } = useQuery("listProducts", ListProducts);

	// console.log(listCustomers);
	// console.log(listProducts);
	let listCustomersData = [];
	let listProductsData = [];
	let customersInfo = {};
	let ProductInfo = {};
	let productslist = [];
	let productSpec = {};
	if (Array.isArray(listCustomers?.data) && Array.isArray(listProducts?.data)) {
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
		// console.log(customersInfo);
		listProductsData = _.map(listProducts.data, (item) => {
			productslist.push(item[0]);
			productSpec = { price: item[2] };
			ProductInfo.list = productslist;
			ProductInfo[item[0]] = productSpec;

			return {
				label: item[0],
				key: item[0],
			};
		});
		// console.log(ProductInfo);
		return (
			<AddSubscriptionLayout
				listProductsData={listProductsData}
				listCustomersData={listCustomersData}
				customersInfo={customersInfo}
				useMutation={useMutation}
			/>
		);
	} else {
		return <h1>Loading....</h1>;
	}
};

export default AddSubscriptionPage;
