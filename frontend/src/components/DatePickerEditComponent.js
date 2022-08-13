import { DatePicker, Space } from "antd";
import moment from "moment";
import React from "react";

const range = (start, end) => {
	const result = [];

	for (let i = start; i < end; i++) {
		result.push(i);
	}

	return result;
}; // eslint-disable-next-line arrow-body-style

const disabledDate = (current) => {
	// Can not select days before today and today
	return current && current < moment().endOf("day");
};

const DatePickerEditComponent = () => (
	<Space direction="vertical" size={12}>
		<DatePicker
			style={{ width: "22rem", height: "3rem", fontSize: "1rem" }}
			disabledDate={disabledDate}
		/>
	</Space>
);

export default DatePickerEditComponent;
