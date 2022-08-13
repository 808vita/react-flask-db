import { DatePicker, Space } from "antd";
import React from "react";
const { RangePicker } = DatePicker;

const DatePickerComponent = ({ setSelectedStartDate, setSelectedStartEnd }) => {
	const handleChange = (dateString) => {
		setSelectedStartDate(dateString[0]);
		setSelectedStartEnd(dateString[1]);
		console.log(dateString);
	};
	return (
		<Space direction="vertical" size={12}>
			<RangePicker
				style={{ width: "22rem" }}
				onChange={(date, dateString) => handleChange(dateString)}
			/>
		</Space>
	);
};

export default DatePickerComponent;
