import React, { useRef } from 'react'
import { NavBarStyles } from './styles/navBarStyles.js'
import { useTranslation } from 'react-i18next'
import i18n, { i18Languages } from '@/i18n.js'

import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'

// Textos
import './lang'

const NavBarComponent = ({}) => {
	const { t } = useTranslation()
	const waitHandleChange = useRef(null)

	const handleChange = ({ target }) => {
		waitHandleChange.current = setTimeout(() => {
			i18n.changeLanguage(target.value)
			const event = new CustomEvent('eventLangChange', {
				detail: { lang: target.value }
			})
			window.dispatchEvent(event)
		}, 250)
	}

	return (
		<NavBarStyles>
			<div className="logo">
				<div>
					<img src={viteLogo} className="logo" alt="Vite logo" />
					<img src={reactLogo} className="logo react" alt="React logo" />
				</div>
				<h1>{t('components_navbar:LOGO_TITLE')}</h1>
			</div>

			<div className="language-selector">
				<label htmlFor="languages" className="language-selector__label">
					{t('components_navbar:LANGUAGE')}
				</label>

				<select
					defaultValue={i18n.language}
					id="languages"
					className="language-selector__select"
					onChange={handleChange}
				>
					{Object.keys(i18Languages).map(lang => (
						<option
							key={lang}
							value={lang}
							className="language-selector__option"
						>
							{i18Languages[lang]}
						</option>
					))}
				</select>
			</div>
		</NavBarStyles>
	)
}

NavBarComponent.propTypes = {
	// prop1: PropTypes.string
}

export const NavBar = React.memo(NavBarComponent)
