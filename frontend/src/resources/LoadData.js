import axios from "axios";
//

export const ListCustomers = () => {
	return axios.get("/api/list-customers");
};
export const ListProducts = () => {
	return axios.get("/api/list-products");
};

export const AddSubscription = (formData) => {
	return axios.post("/api/add-subscription", formData);
};
