import React, { createContext, useState } from "react";

export const GlobalContext = createContext();
const GlobalState = ({ children }) => {
	const [loading, setLoading] = useState(false);
	return (
		<GlobalContext.Provider value={{ loading, setLoading }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;
