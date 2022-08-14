import React, { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import { Col, Row, Divider, Button } from "antd";
import { ProcessGroupedByProduct } from "../resources/ProcessData";
import _ from "lodash";

const ReportsLayout = ({ GroupedByProduct, GroupedByCustomer }) => {
	const [ByProduct, setByProduct] = useState([]);
	const [ByCustomers, setByCustomers] = useState([]);
	useEffect(() => {
		setByProduct(ProcessGroupedByProduct(GroupedByProduct));
		setByCustomers(ProcessGroupedByProduct(GroupedByCustomer));
	}, [GroupedByProduct]);

	return (
		<>
			<Row justify="center" align="middle">
				<Col span={8} style={{ padding: "20px 0px 20px 0px" }}>
					{ByProduct && (
						<h1>Total Revenue: {_.sum(ByProduct[1])} (till date)</h1>
					)}
				</Col>
			</Row>
			<Divider />
			<Row justify="center" align="middle">
				<Col span={10}>{ByProduct && <PieChart info={ByProduct} />}</Col>
				<Col span={10}>{ByProduct && <h2>Segemented by product</h2>}</Col>
			</Row>
			<Divider />
			<Row justify="center" align="middle">
				<Col span={10} style={{ padding: "20px 0px 0px 0px" }}>
					{ByProduct && <PieChart info={ByCustomers} />}
				</Col>
				<Col span={10}>{ByCustomers && <h2>Segemented by customers</h2>}</Col>
			</Row>
		</>
	);
};

export default ReportsLayout;
