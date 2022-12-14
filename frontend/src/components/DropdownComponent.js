import {
	DownOutlined,
	UserOutlined,
	UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Space } from "antd";
import React, { useState } from "react";

const icons = {
	userOutline: <UserOutlined />,
	numberOfUsers: <UsergroupAddOutlined />,
};

const usersCount = [
	{
		label: "1 User",
		key: "1",
		icon: <UsergroupAddOutlined />,
	},
	{
		label: "2 Users",
		key: "2",
		icon: <UsergroupAddOutlined />,
	},
	{
		label: "3 Users",
		key: "3",
		icon: <UsergroupAddOutlined />,
	},
];

const App = ({
	buttonName,
	options,
	customersInfo,
	setSelectedOption,
	customerDateInfo,
	setShowDate,
}) => {
	const [selection, setSelection] = useState("");

	const handleMenuClick = (e) => {
		// console.log("click", e);
		if (buttonName === "Select Customer") {
			setSelection(`${customersInfo[e.key]}`);
			message.info(`Selected ${customersInfo[e.key]}`);
		} else if (buttonName === "Select Product") {
			setSelection(e.key);
			message.info(`Selected Product ${e.key}`);
		} else if (buttonName === "Customer With Subscriptions") {
			setSelection(`${customersInfo[e.key]}`);
			message.info(`Selected ${customersInfo[e.key]}`);
			setShowDate(customerDateInfo[e.key]);
			// console.log(customerDateInfo[e.key]);
		} else {
			setSelection(`No. Of Users : ${e.key}`);
			message.info(`Selected ${e.key} Users`);
		}
		setSelectedOption(e.key);
	};
	const menu = (
		<Menu onClick={handleMenuClick} items={options ? options : usersCount} />
	);
	return (
		<>
			<Space wrap>
				<Dropdown overlay={menu}>
					<Button style={{ width: "22rem", height: "3rem", fontSize: "1rem" }}>
						<Space>
							{selection ? selection : buttonName}
							<DownOutlined />
						</Space>
					</Button>
				</Dropdown>
			</Space>
		</>
	);
};

export default App;
