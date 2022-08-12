import {
	DownOutlined,
	UserOutlined,
	UsergroupAddOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, message, Space } from "antd";
import React from "react";

const handleButtonClick = (e) => {
	message.info("Click on left button.");
	console.log("click left button", e);
};

const handleMenuClick = (e) => {
	message.info("Click on menu item.");
	console.log("click", e);
};

const icons = {
	userOutline: <UserOutlined />,
	numberOfUsers: <UsergroupAddOutlined />,
};

const menu = (
	<Menu
		onClick={handleMenuClick}
		items={[
			{
				label: "1st menu item",
				key: "1",
				icon: <UserOutlined />,
			},
			{
				label: "2nd menu item",
				key: "2",
				icon: <UserOutlined />,
			},
			{
				label: "3rd menu item",
				key: "3",
				icon: <UserOutlined />,
			},
		]}
	/>
);

const App = ({ buttonName }) => (
	<Space wrap>
		<Dropdown overlay={menu}>
			<Button style={{ width: "22rem" }}>
				<Space>
					{buttonName}
					<DownOutlined />
				</Space>
			</Button>
		</Dropdown>
	</Space>
);

export default App;
