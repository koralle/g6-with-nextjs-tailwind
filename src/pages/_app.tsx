import App, { AppProps } from 'next/app'
import 'sanitize.css'
import 'tailwindcss/tailwind.css'

class KoralleApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return <Component {...pageProps} />
  }
}

export default KoralleApp
