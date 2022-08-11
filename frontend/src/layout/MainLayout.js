import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
	const GContext = useContext(GlobalContext);
	const { loading, setLoading } = GContext;
	const navigate = useNavigate();

	const handleCLick = (key) => {
		if (key === "logOut") {
			console.log(` Logged Out`);
			return;
		} else if (key === "editSubscription") {
			navigate("/edit-subscription");
			return;
		} else if (key === "addSubscription") {
			navigate("/add-subscription");

			return;
		}
	};
	return (
		<Layout>
			<Header
				style={{
					position: "fixed",
					zIndex: 1,
					width: "100%",
				}}
			>
				{/* <div className="logo" /> */}
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["addSubscription"]}
					items={[
						{
							key: `addSubscription`,
							label: `Add Subscription`,
						},
						{
							key: `editSubscription`,
							label: `Edit Subscription`,
						},
						{
							key: `logOut`,
							label: `Log Out`,
						},
					]}
					onClick={(e) => handleCLick(e.key)}
				/>
			</Header>
			<Content
				className="site-layout"
				style={{
					padding: "0 50px",
					marginTop: 64,
				}}
			>
				<div
					className="site-layout-background"
					style={{
						padding: 24,
						minHeight: 600,
					}}
				>
					{children}
				</div>
			</Content>
			<Footer
				style={{
					textAlign: "center",
				}}
			>
				React - Flask - DB
			</Footer>
		</Layout>
	);
};

export default MainLayout;
