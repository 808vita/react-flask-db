import axios from "axios";
//

export const ListCustomers = async () => {
	try {
		const response = await axios.get("/api/list-customers");
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
	return;
};

export const ListProducts = async () => {
	try {
		const response = await axios.get("/api/list-products");
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
	return;
};
