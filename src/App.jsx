import { NavBar } from './components/NavBar/NavBar.jsx'
import { GlobalStyle } from './AppStyles.js'

import '@/i18n.js'
import Series from '@/components/Series'

function App() {
	return (
		<>
			<div>
				<GlobalStyle />
				<NavBar />
				<Series />
			</div>
		</>
	)
}

export default App
