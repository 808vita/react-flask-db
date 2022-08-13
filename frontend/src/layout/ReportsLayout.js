import React, { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import { Col, Row, Divider, Button } from "antd";
import { ProcessGroupedByProduct } from "../resources/ProcessData";

const ReportsLayout = ({ GroupedByProduct, GroupedByCustomer }) => {
	const [ByProduct, setByProduct] = useState([]);
	useEffect(() => {
		setByProduct(ProcessGroupedByProduct(GroupedByProduct));
	}, [GroupedByProduct]);

	return (
		<>
			<Row justify="center" align="middle">
				<Col span={10}>{ByProduct && <PieChart info={ByProduct} />}</Col>
			</Row>
		</>
	);
};

export default ReportsLayout;
