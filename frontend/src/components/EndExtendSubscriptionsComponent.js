import React, { useState } from "react";
import { Button, Dropdown, Menu, message, Space } from "antd";
import DatePickerEditComponent from "./DatePickerEditComponent";
import { DownOutlined } from "@ant-design/icons";
import moment from "moment";
const options = [
	{
		label: "Extend End Date",
		key: "1",
	},
	{
		label: "End Subscription Today",
		key: "2",
	},
];
const EndExtendSubscriptionsComponent = ({
	setSelectedStartEnd,
	buttonName,showDate
}) => {
	const [selection, setSelection] = useState("");

	const handleMenuClick = (e) => {
		// console.log("click", e);
		if (e.key == 1) {
			setSelection(`Extend End Date`);
			message.info(`Selected Extend End Date`);
			setSelectedStartEnd("");
		} else {
			setSelection(`End Subscription Today`);
			message.info(`Selected End Subscription Today`);
			console.log(moment(new Date()).format("YYYY-MM-DD"));
			setSelectedStartEnd(moment(new Date()).format("YYYY-MM-DD"));
		}
	};
	const menu = <Menu onClick={handleMenuClick} items={options} />;
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
			{selection === "Extend End Date" && (
				<DatePickerEditComponent
					setSelectedStartEnd={setSelectedStartEnd}
					showDate={showDate}
				/>
			)}
		</>
	);
};

export default EndExtendSubscriptionsComponent;
