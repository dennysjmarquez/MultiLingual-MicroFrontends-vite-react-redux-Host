import styled, { css } from 'styled-components'

const seriesStyles = css`
	.series {
		display: flex;
		flex-direction: column;
		max-width: 800px;
		width: 100%;
		box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
			0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
		min-height: 500px;

		& .series_loader {
			margin: 20px;
		}

		& .series__nav {
			display: flex;
			border-radius: 12px 12px 0px 0px;
			border-left-width: 1px;
			border-right-width: 1px;
			background-color: rgb(16, 20, 24);
			padding: 24px;
      align-items: center;
			
			& h3 {
				margin: 0 10px 0 0;
			}

			& .nav__ButtonGroup {
				display: inline-flex;
				border-radius: 4px;
				box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
					rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
					rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

				& .ButtonGroup__button--active {
					background-color: rgb(144, 202, 249);
					color: rgba(0, 0, 0, 0.87);
				}

				& button {
					background-color: transparent;
					border: 0;
					box-shadow: none;
					color: #fff;
					text-decoration: underline;
					cursor: pointer;
				}

				& button:not(:last-of-type) {
					border-right: 1px solid #000;
				}

				& button:first-of-type {
					border-top-left-radius: 4px;
					border-bottom-left-radius: 4px;
					border-top-color: rgb(66, 165, 245);
					border-bottom-color: rgb(66, 165, 245);
					border-left-color: rgb(66, 165, 245);
				}
			}
		}

		.series__body {
			height: 100%;

			& .bod__tooltip {
				width: 50%;
				margin: 20px;
				color: rgb(255, 255, 255);
				border-radius: 12px;
				box-shadow: none;
				background-image: none;
				transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
					box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
				background-color: rgb(16, 20, 24);
				display: block;
				padding: 12px;
				border: 2px solid rgb(51, 153, 255);
			}
		}
	}
`

export const SeriesStyles = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;

	${seriesStyles}
`
