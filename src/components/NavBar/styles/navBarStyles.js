import styled, { css } from 'styled-components'

const navBarStyles = css`

  .language-selector {
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
  }

  .language-selector__label {
    font-size: 15px;
    line-height: 1.25rem;
    margin-right: 10px;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    font-size: 7px;
    & h1 {
      margin-left: 10px;
    }
  }

`
export const NavBarStyles = styled.div`

  justify-content: space-between;
  display: flex;
  position: sticky;
  top: 0;
  background: black;
  z-index: 1;
  padding: 10px 15px;
  
  ${navBarStyles}
`
