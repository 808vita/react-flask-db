import { DatePicker, Space } from "antd";
import React from "react";
const { RangePicker } = DatePicker;

const DatePickerComponent = () => (
	<Space direction="vertical" size={12}>
		<RangePicker onChange={(date, dateString) => console.log(dateString)} />
	</Space>
);

export default DatePickerComponent;
