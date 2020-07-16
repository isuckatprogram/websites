import Layout from "../components/Layout"
import Head from "next/head"

class AboutPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <Layout>
        <Head>
          <title>JDanielS - About</title>
        </Head>
        <style>{`
          *{
            text-align: center;
            font-family: Arial;
          }
          p{
            word-wrap: break-word;
          }
        `}</style>
        <br/>
        <h1>Who is PDanielY?</h1>
        <p>PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691).</p>
      </Layout>
    )
  }
}

export default AboutPage