import axios from "axios";
//

export const ListCustomers = () => {
	return axios.get("/api/list-customers");
};
export const ListProducts = () => {
	return axios.get("/api/list-products");
};
export const ListSubscriptions = () => {
	return axios.get("/api/list-subscriptions");
};
export const AddSubscription = async (formData) => {
	try {
		const response = await axios.post("/api/add-subscription", formData);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);

		return error;
	}
};
