import React, { useState } from 'react';
import AppIntro from './src/screens/AppIntro';
import { Routes } from "./src/routes";

export default function App() {
	const [showRealApp, setShowRealApp] = useState(true)
	const childToParent = (childData) => {
		setShowRealApp(childData)
	}
	return (
		<>
			{showRealApp ?
				(
					<AppIntro childToParent={childToParent} />
				) : (
					<Routes />
				)
			}

		</>
	);
}
