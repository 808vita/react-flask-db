import React from "react";
import EditSubscriptionLayout from "../layout/EditSubscriptionLayout";
import { ListCustomers, ListSubscriptions } from "../resources/LoadData";
import { useQuery, useMutation } from "react-query";
import _ from "lodash";

const EditSubscriptionPage = () => {
	const { isLoading, data: listCustomers } = useQuery(
		"listCustomers",
		ListCustomers
	);
	const { data: listSubscriptions } = useQuery(
		"listSubscriptions",
		ListSubscriptions
	);
	if (isLoading) return <h1>Loading....</h1>;
	console.log(listCustomers);
	console.log(listSubscriptions);
	let listCustomersData = [];
	let listSubscriptionsData = [];
	let customersInfo = {};
	let customerProductInfo = {};
	let customerDateInfo = {};
	if (
		Array.isArray(listCustomers?.data) &&
		Array.isArray(listSubscriptions?.data)
	) {
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
		listSubscriptionsData = _.map(listSubscriptions.data, (item) => {
			customerProductInfo[item[0]] = customersInfo[item[1]] + " : " + item[2];
			customerDateInfo[item[0]] = [item[3], item[4]];
			return {
				label: customersInfo[item[1]] + " : " + item[2],
				key: item[0],
			};
		});
		console.log(listSubscriptionsData);
		console.log(customerProductInfo);
		console.log(customerDateInfo);
		return (
			<EditSubscriptionLayout
				customersInfo={customersInfo}
				customerProductInfo={customerProductInfo}
				listSubscriptionsData={listSubscriptionsData}
				customerDateInfo={customerDateInfo}
				useMutation={useMutation}
			/>
		);
	} else {
		return <h2>Issues with DB</h2>;
	}
};

export default EditSubscriptionPage;
