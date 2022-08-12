import React from "react";
import { Col, Row, Divider } from "antd";
import DropdownComponent from "../components/DropdownComponent";

const EditSubscriptionPage = () => {
	return (
		<Row justify="center" align="middle">
			<Col span={24}>
				<Row justify="center" align="middle">
					Edit Subscription
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
		</Row>
	);
};

export default EditSubscriptionPage;
