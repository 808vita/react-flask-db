import { Col, Row, Divider } from "antd";
import React from "react";
import DatePickerComponent from "../components/DatePickerComponent";
import DropdownComponent from "../components/DropdownComponent";

const AddSubscriptionLayout = () => (
	<Row justify="center" align="middle">
		<Col span={24}>
			<Row justify="center" align="middle">
				Add Subscription
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
				<DatePickerComponent />
			</Row>
		</Col>
		<Col span={24}>
			<Row justify="center" align="middle">
				Add Subscription button
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
		<Col span={6}>col-6</Col>
		<Col span={6}>col-6</Col>
		<Col span={6}>col-6</Col>
		<Col span={6}>col-6</Col>
	</Row>
);

export default AddSubscriptionLayout;
