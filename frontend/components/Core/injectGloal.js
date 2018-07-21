import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  body {
    font-family: 'Pridi', serif !important;
    background: url('/static/img/monkeyxgiant.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center 85%;
  }
`
