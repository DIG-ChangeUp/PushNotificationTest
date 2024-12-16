import { Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai'
import { UIProvider } from "@yamada-ui/react";

import {IndexPage} from "./components/IndexPage.tsx";
import {FromPush} from "./components/FromPush.tsx";

function AppRoutes() {

	return (
		<UIProvider>
			<Provider>
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="/FromPush" element={<FromPush />} />
				</Routes>
			</Provider>
		</UIProvider>
	)
}

export default AppRoutes
