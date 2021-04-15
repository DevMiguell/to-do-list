import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f2f5;
    font-family: 'Ubuntu', sans-serif;
  }

  html {
    font-size: 93.75%;
  }

  @media (min-width: 800px) {
    html {
      font-size: 87.5%;
    }
  }
`
