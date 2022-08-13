import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddSubscriptionPage from "./pages/AddSubscriptionPage";
import EditSubscriptionPage from "./pages/EditSubscriptionPage";

import MainLayout from "./layout/MainLayout";
function App() {
	return (
		<div>
			<Routes>
				<Route
					exact
					path="/"
					element={<MainLayout children={<AddSubscriptionPage />} />}
				/>
				<Route
					exact
					path="/edit-subscription"
					element={<MainLayout children={<EditSubscriptionPage />} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
