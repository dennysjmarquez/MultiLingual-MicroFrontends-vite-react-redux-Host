import { NavBar } from './components/NavBar/NavBar.jsx'
import { GlobalStyles } from './AppStyles.js'

import '@/i18n.js'
import Series from '@/components/Series'

function App() {
	return (
		<>
			<div>
				<GlobalStyles />
				<NavBar />
				<Series />
			</div>
		</>
	)
}

export default App
