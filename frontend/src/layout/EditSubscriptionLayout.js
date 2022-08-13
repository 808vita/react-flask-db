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
				<Col span={12}>
					<Row justify="center" align="middle">
						customer Name / id
					</Row>
				</Col>
				<Col span={12}>
					<Row justify="center" align="middle">
						<DropdownComponent />
					</Row>
				</Col>
				<Col span={12}>
					<Row justify="center" align="middle">
						Product Name
					</Row>
				</Col>
				<Col span={12}>
					<Row justify="center" align="middle">
						<DropdownComponent />
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
				<Divider orientation="left">sub-element monospaced arrangement</Divider>
				<Col span={8}>
					<Row justify="center" align="middle">
						oof
					</Row>
				</Col>
				<Col span={8}>
					<Row justify="center" align="middle">
						oof
					</Row>
				</Col>
				<Col span={8}>
					<Row justify="center" align="middle">
						oof
					</Row>
				</Col>
			</Col>
		</Row>
	);
};

export default EditSubscriptionLayout;
