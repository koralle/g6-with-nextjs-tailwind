import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja-JP">
      <Head prefix="og: http://ogp.me/ns#">
        <meta property="og:url" content="https://g6-with-nextjs-tailwind.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HOME" />
        <meta property="og:description" content="G6.jsをNext.jsで構築したWebアプリ上で使ってみた。ついでにTailwind CSSをつかってみた。" />
        <meta property="og:site_name" content="g6-with-nextjs-tailwind" />
        <meta property="og:image" content="https://g6-with-nextjs-tailwind.vercel.app/Belle.jpg" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument