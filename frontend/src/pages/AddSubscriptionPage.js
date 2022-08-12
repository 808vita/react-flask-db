import React, { useEffect } from "react";
import AddSubscriptionLayout from "../layout/AddSubscriptionLayout";
import { ListCustomers, ListProducts } from "../resources/LoadData";

const AddSubscriptionPage = () => {
	useEffect(() => {
		ListCustomers();
		ListProducts();
	}, []);

	return <AddSubscriptionLayout />;
};

export default AddSubscriptionPage;
