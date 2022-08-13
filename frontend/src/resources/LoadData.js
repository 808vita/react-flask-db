import axios from "axios";
import {
	SuccessMessage,
	ErrorMessage,
	WarningMessage,
} from "../components/Messages";
//

export const ListCustomers = async () => {
	try {
		const response = await axios.get("/api/list-customers");
		return response;
	} catch (error) {
		return error.response;
	}
};
export const ListProducts = async () => {
	try {
		const response = await axios.get("/api/list-products");
		return response;
	} catch (error) {
		return error.response;
	}
};
export const ListSubscriptions = async () => {
	try {
		const response = await axios.get("/api/list-subscriptions");
		return response;
	} catch (error) {
		return error.response;
	}
};
export const ReportsData = async () => {
	try {
		const response = await axios.get("/api/reports-data");
		return response;
	} catch (error) {
		return error.response;
	}
};
export const AddSubscription = async (formData) => {
	try {
		const response = await axios.post("/api/add-subscription", formData);
		console.log(response);
		if (response.status == 201) {
			SuccessMessage("Added Subscription!");
		}

		return response;
	} catch (error) {
		console.log(error);
		if (error.response.status == 400) {
			WarningMessage(
				"Already exists!" + "! Please Change options & try again."
			);
		} else {
			ErrorMessage(error.message + "! Please Change options & try again.");
		}
		return error.response;
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
