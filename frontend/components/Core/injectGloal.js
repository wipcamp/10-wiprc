import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  body {
    font-family: 'Pridi', serif !important;
    background: url('/static/img/bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center 95%;
    min-height: 100vh;
  }
  .btn {
    white-space:normal !important;
    word-wrap: break-word !important;
  }
`
