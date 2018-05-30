import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="../static/css/style.css" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content="name" />
          <meta name="keywords" content="keyword, keywords" />
          <meta property="og:title" content="name" />
          <meta property="og:type" content="product" />
          <meta property="og:url" content="url" />
          <meta property="og:image" content="url/og" />
          <meta property="og:site_name" content="text" />
          <meta property="og:description" content="text" />
          <meta property="fb:page_id" content="xxx" />
          <meta property="fb:app_id" content="xxx" />

          <link rel="apple-touch-icon" sizes="57x57" href="../static/img/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="../static/img/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="../static/img/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="../static/img/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="../static/img/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="../static/img/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="../static/img/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="../static/img/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="../static/img/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="../static/img/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="../static/img/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="../static/img/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#fff" />
          <link href="https://fonts.googleapis.com/css?family=Pridi" rel="stylesheet" />
          <title>{`10 WIP RC`}</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
