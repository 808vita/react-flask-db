import { DatePicker, Space } from "antd";
import moment from "moment";
import React from "react";

const DatePickerEditComponent = ({ setSelectedStartEnd, showDate }) => {
	const handleChange = (dateString) => {
		setSelectedStartEnd(dateString);
		console.log(dateString);
	};
	const disabledDate = (current) => {
		if (showDate) {
			console.log(showDate);

			return current && current < moment(showDate[0]);
		} else {
			// Can not select days before today and today
			console.log(showDate);
			return current && current < moment().endOf("day");
		}
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
