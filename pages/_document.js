import Document, { Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document{
  static async getInitialProps(ctx){
    var props = await Document.getInitialProps(ctx)
    return { ...props}
  }
  render(){
    return (
      <Html>
        <Head>
          <link rel="icon" href="/static/hackermon.png"/>
          <meta name="theme-color" content="#50c878" />
          <meta name="og:title" content="PDanielY"/>
          <meta name="og:description" content="PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691)."/>
          <meta name="og:image" content="/static/hackermon.png"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="PDanielY"/>
          <meta name="twitter:description" content="PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691)."/>
          <meta name="twitter:image" content="/static/hackermon.png"/>
          <meta name="twitter:site" content="@plop_daniel"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument