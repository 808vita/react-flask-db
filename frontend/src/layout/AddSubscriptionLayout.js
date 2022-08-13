import { Col, Row, Divider, Button } from "antd";
import React, { useState } from "react";
import DatePickerComponent from "../components/DatePickerComponent";
import DropdownComponent from "../components/DropdownComponent";
import { AddSubscription } from "../resources/LoadData";

const AddSubscriptionLayout = ({
	listCustomersData,
	listProductsData,
	customersInfo,
	useMutation,
}) => {
	const [selectedCustomerID, setSelectedCustomerID] = useState("");
	const [selectedProduct, setSelectedProduct] = useState("");
	const [selectedUsersCount, setSelectedUsersCount] = useState("");
	const [selectedStartDate, setSelectedStartDate] = useState("");
	const [selectedStartEnd, setSelectedStartEnd] = useState("");
	const { mutate } = useMutation();
	const handleButtonClick = () => {
		if (
			selectedCustomerID &&
			selectedProduct &&
			selectedUsersCount &&
			selectedStartDate &&
			selectedStartEnd
		) {
			console.log("all selected !");
			const formData = new FormData();

			formData.append("customer_id", selectedCustomerID);
			formData.append("selected_product_id", selectedProduct);
			formData.append("users_count", selectedUsersCount);
			formData.append("start_date", selectedStartDate);
			formData.append("end_date", selectedStartEnd);

			mutate(AddSubscription(formData));
			console.log(mutate);
		} else {
			console.log("oof fill/select all fields");
		}
	};
	return (
		<Row justify="center" align="middle">
			<Col span={24}>
				<Col span={24}>
					<Row justify="center" align="middle">
						<h1>Add Subscription</h1>
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="center" align="middle">
						<Col span={24}>
							<Row justify="center" align="middle">
								<DropdownComponent
									buttonName={"Select Customer"}
									options={listCustomersData}
									customersInfo={customersInfo}
									setSelectedOption={setSelectedCustomerID}
								/>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Row>
						<Col span={24}>
							<Row justify="center" align="middle">
								<DropdownComponent
									buttonName={"Select Product"}
									options={listProductsData}
									setSelectedOption={setSelectedProduct}
								/>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Row>
						<Col span={24}>
							<Row justify="center" align="middle">
								<DropdownComponent
									buttonName={"Number Of Users"}
									setSelectedOption={setSelectedUsersCount}
								/>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="center" align="middle">
						<DatePickerComponent
							setSelectedStartDate={setSelectedStartDate}
							setSelectedStartEnd={setSelectedStartEnd}
						/>
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="center" align="middle">
						<Button onClick={() => handleButtonClick()} type="primary">
							Create Subscription
						</Button>
					</Row>
				</Col>
			</Col>
		</Row>
	);
};

export default AddSubscriptionLayout;
