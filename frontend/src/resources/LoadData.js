import axios from "axios";
//

export const ListCustomers = async () => {
	try {
		const response = await axios.get("/api/list-customers");
		console.log(response);
	} catch (error) {
		console.error(error);
	}
	return;
};
