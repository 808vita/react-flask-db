import { DatePicker, Space } from "antd";
import moment from "moment";
import React from "react";

const disabledDate = (current) => {
	// Can not select days before today and today
	return current && current < moment().endOf("day");
};

const DatePickerEditComponent = ({ setSelectedStartEnd }) => {
	const handleChange = (dateString) => {
		setSelectedStartEnd(dateString);
		console.log(dateString);
	};

	return (
		<Space direction="vertical" size={12}>
			<DatePicker
				style={{ width: "22rem", height: "3rem", fontSize: "1rem" }}
				disabledDate={disabledDate}
				onChange={(date, dateString) => handleChange(dateString)}
			/>
		</Space>
	);
};

export default DatePickerEditComponent;
