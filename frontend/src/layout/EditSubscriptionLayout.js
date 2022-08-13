import React, { useState } from "react";
import { Col, Row, Divider, Button } from "antd";
import DropdownComponent from "../components/DropdownComponent";
import DatePickerEditComponent from "../components/DatePickerEditComponent";
import { EditSubscription } from "../resources/LoadData";
import EndExtendSubscriptionsComponent from "../components/EndExtendSubscriptionsComponent";
import {
	SuccessMessage,
	ErrorMessage,
	WarningMessage,
} from "../components/Messages";
const EditSubscriptionLayout = ({
	customersInfo,
	customerProductInfo,
	listSubscriptionsData,
	useMutation,
	customerDateInfo,
}) => {
	const [selectedSubscriptionID, setSelectedSubscriptionID] = useState("");
	const [selectedStartEnd, setSelectedStartEnd] = useState("");
	const [showDate, setShowDate] = useState("");
	const { mutate } = useMutation();
	const handleButtonClick = () => {
		if (selectedSubscriptionID && selectedStartEnd) {
			console.log("all selected !");
			const formData = new FormData();

			formData.append("subscription_id", selectedSubscriptionID);
			formData.append("end_date", selectedStartEnd);

			mutate(EditSubscription(formData));
			// console.log(mutate);
		} else {
			console.log("oof fill/select all fields");
			WarningMessage("select all fields");
		}
	};

	return (
		<Row justify="center" align="middle">
			<Col span={24} style={{ padding: "20px 0px 10px 0px" }}>
				<Col span={24}>
					<Row justify="center" align="middle">
						<h1>Edit Subscription</h1>
					</Row>
				</Col>
				<Col span={24} style={{ padding: "5px 0px 20px 0px" }}>
					<Row justify="center" align="middle">
						<Col span={24}>
							<Row justify="center" align="middle">
								<DropdownComponent
									buttonName={"Customer With Subscriptions"}
									options={listSubscriptionsData}
									customersInfo={customerProductInfo}
									setSelectedOption={setSelectedSubscriptionID}
									customerDateInfo={customerDateInfo}
									setShowDate={setShowDate}
								/>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col span={24} style={{ padding: "5px 0px 20px 0px" }}>
					<Row justify="center" align="middle">
						<h4>Ends On: {showDate}</h4>
					</Row>
				</Col>
				<Col span={24} style={{ padding: "5px 0px 20px 0px" }}>
					<Row justify="center" align="middle">
						{/* <DatePickerEditComponent
							setSelectedStartEnd={setSelectedStartEnd}
						/> */}
						<EndExtendSubscriptionsComponent
							buttonName={"Select Option"}
							setSelectedStartEnd={setSelectedStartEnd}
						/>
					</Row>
				</Col>
				<Col span={24} style={{ padding: "5px 0px 20px 0px" }}>
					<Row justify="center" align="middle">
						<Button
							style={{
								padding: "10px 5px ",
								width: "22rem",
								height: "3rem",
								fontWeight: "bolder",
								fontSize: "1rem",
							}}
							onClick={() => handleButtonClick()}
							type="primary"
						>
							Edit Subscription
						</Button>
					</Row>
				</Col>
			</Col>
		</Row>
	);
};

export default EditSubscriptionLayout;
