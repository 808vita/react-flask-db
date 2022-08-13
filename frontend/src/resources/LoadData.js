import axios from "axios";
import {
	SuccessMessage,
	ErrorMessage,
	WarningMessage,
} from "../components/Messages";
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
		if (response.data == "Added Entry") {
			SuccessMessage("Added Subscription!");
		}
		if (response.data == "Already Purchased") {
			WarningMessage(response.data + "! Please Change options & try again.");
		}
		return response;
	} catch (error) {
		console.log(error);
		ErrorMessage(error);
		return error;
	}
};

export const EditSubscription = async (formData) => {
	try {
		const response = await axios.post("/api/edit-subscription", formData);
		console.log(response);
		SuccessMessage("Edited Subscription!");

		return response;
	} catch (error) {
		console.log(error);
		ErrorMessage(error);
		return error;
	}
};
