import { Col, Row, Divider, Button } from "antd";
import React from "react";
import DatePickerComponent from "../components/DatePickerComponent";
import DropdownComponent from "../components/DropdownComponent";

const AddSubscriptionLayout = () => (
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
							<DropdownComponent buttonName={"Select Customer"} />
						</Row>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row>
					<Col span={24}>
						<Row justify="center" align="middle">
							<DropdownComponent buttonName={"Select Product"} />
						</Row>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row>
					<Col span={24}>
						<Row justify="center" align="middle">
							<DropdownComponent buttonName={"Number Of Users"} />
						</Row>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row justify="center" align="middle">
					<DatePickerComponent />
				</Row>
			</Col>
			<Col span={24}>
				<Row justify="center" align="middle">
					<Button type="primary">Create Subscription</Button>
				</Row>
			</Col>
		</Col>
	</Row>
);

export default AddSubscriptionLayout;
