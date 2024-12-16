import { useEffect } from 'react'
import OneSignal from 'react-onesignal'

export function IndexPage() {
	useEffect(() => {
		(async() => {
			OneSignal.init({
				appId: 'c890d157-b1e0-4779-8222-465dd83359ff',
			})
		})()
	}, [])
	return(
		<>
			<h1>Index Page</h1>
		</>
	)
}