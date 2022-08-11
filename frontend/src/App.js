import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddSubscriptionPage from "./pages/AddSubscriptionPage";
import EditSubscriptionPage from "./pages/EditSubscriptionPage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route
					exact
					path="/add-subscription"
					element={<AddSubscriptionPage />}
				/>
				<Route
					exact
					path="/edit-subscription"
					element={<EditSubscriptionPage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
