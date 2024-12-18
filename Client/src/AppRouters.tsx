import { Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai'
import { UIProvider } from "@yamada-ui/react";

import {IndexPage} from "./components/IndexPage.tsx";
import {FromPush} from "./components/FromPush.tsx";
import {useEffect,useState} from "react";
import OneSignal from "react-onesignal";

function AppRoutes() {
	const [oneSignalUserID, setOneSignalUserID] = useState('')
	useEffect(() => {
		(async() => {
			await OneSignal.init({
				appId: 'c890d157-b1e0-4779-8222-465dd83359ff',
			})
			const _id = OneSignal.User.PushSubscription.id
			setOneSignalUserID(_id as string)
		})()
	}, [])

	return (
		<UIProvider>
			<h1>調べたいこと : {oneSignalUserID}</h1>
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
