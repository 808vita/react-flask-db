import React, { useState } from "react";
import { Col, Row, Divider } from "antd";
import DropdownComponent from "../components/DropdownComponent";

const EditSubscriptionLayout = ({
	customersInfo,
	customerProductInfo,
	listSubscriptionsData,
	useMutation,
}) => {
	const [selectedSubscriptionID, setSelectedSubscriptionID] = useState("");
	return (
		<Row justify="center" align="middle">
			<Col span={24}>
				<Col span={24}>
					<Row justify="center" align="middle">
						<h1>Edit Subscription</h1>
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="center" align="middle">
						<Col span={24}>
							<Row justify="center" align="middle">
								<DropdownComponent
									buttonName={"Customer With Subscriptions"}
									options={listSubscriptionsData}
									customersInfo={customerProductInfo}
									setSelectedOption={setSelectedSubscriptionID}
								/>
							</Row>
						</Col>
					</Row>
				</Col>

				<Col span={24}>
					<Row justify="center" align="middle">
						End Subscription today
					</Row>
				</Col>
				<Col span={24}>
					<Row justify="center" align="middle">
						Edit Subscription button
					</Row>
				</Col>
			</Col>
		</Row>
	);
};

export default EditSubscriptionLayout;
