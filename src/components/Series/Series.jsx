import React, { Suspense, useState } from 'react'
import i18n from '@/i18n.js'
import { useTranslation } from 'react-i18next'
// Estilos
import { SeriesStyles } from '@/components/Series/styles/seriesStyles.js'

// Textos
import './lang'

// Carga de módulos de micro-frontends
const MovieList = React.lazy(() =>
	import('remoteMovieList1/MovieList').catch(() => ({ default: () => null }))
)
const MovieList2 = React.lazy(() =>
	import('remoteMovieList2/MovieList').catch(() => ({ default: () => null }))
)

const SeriesComponent = ({}) => {
	const { t } = useTranslation()
	const [serieSelected, setSerieSelected] = useState(null)

	const handleSerieClick = serie => setSerieSelected(serie)

	return (
		<SeriesStyles>
			<div className="series">
				<div className="series__nav">
					<h3>Series:</h3>


					<div className="nav__ButtonGroup">
						<button
							onClick={() => handleSerieClick('serie1')}
							className={`${
								serieSelected === 'serie1' ? 'ButtonGroup__button--active' : ''
							}`}
						>
							{t('components_series:BUTTON_SERIE1_TEXT')}
						</button>
						<button
							onClick={() => handleSerieClick('serie2')}
							className={`${
								serieSelected === 'serie2' ? 'ButtonGroup__button--active' : ''
							}`}
						>
							{t('components_series:BUTTON_SERIE2_TEXT')}
						</button>
					</div>
				</div>

				<div className="series__body">
					{serieSelected === null && (
						<div className="body__tooltip">
							{t('components_series:TOOLTIP')}
						</div>
					)}

					{serieSelected === 'serie1' && (
						<Suspense
							fallback={<div className="series_loader">Cargando...</div>}
						>
							<div className="animated fadeIn">
								<MovieList lang={i18n.language} />
							</div>
						</Suspense>
					)}

					{serieSelected === 'serie2' && (
						<Suspense
							fallback={<div className="series_loader">Cargando...</div>}
						>
							<div className="animated fadeIn">
								<MovieList2 lang={i18n.language} />
							</div>
						</Suspense>
					)}
				</div>
			</div>
		</SeriesStyles>
	)
}

export const Series = React.memo(SeriesComponent)
