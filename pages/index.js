import Layout from "../components/Layout"
import Head from "next/head"

class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      'startedTypeWriter': false
    }
  }
  componentDidMount(){
    if(this.state.startedTypeWriter == false){
      var things = ['Developer', '"Youtuber"', `Artist`,`Repler`]
      var thing = things[Math.floor(Math.random() * things.length)]
      console.log(thing)
      var text = `PDanielY - Professional ${thing}`
      var dom = document.getElementById('name')
      var i = 0
      var a = setInterval(()=>{
        if(text[i] == undefined){
          clearInterval(a)
          return
        }
        dom.innerHTML = dom.innerHTML + text.charAt(i)
        i++
      },50)
    }
  }
  render(){
    return (
      <Layout> 
        <Head>
          <title>JDanielS</title>
        </Head>
        <style jsx>{`
          *{
            font-family: 'Arial';
            text-align: center;
          }
          .social{
            margin: auto;
          }
          .social *{
            display: inline-block;
          }
          .social img{
            border: 0px solid;
            border-radius: 10px 10px;
            width: 25px;
            height: 25px;
            cursor: pointer;
            padding-right: 5px;
          }
        `}</style><br/><br/>
        <h1 id="name"></h1>
        <div className="social">
          <a href="https://repl.it/@PDanielY"><img src="https://repl.it/public/images/favicon.ico"/></a>
          <a href="https://twitter.com/plop_daniel"><img src="https://twitter.com/favicon.ico"/></a>
          <a href="https://www.youtube.com/channel/UCFi4xjhHSX6V1vaozFiQU2w?view_as=subscriber"><img src="https://youtube.com/favicon.ico"/></a>
          <a href="https://github.com/isuckatprogram"><img src="https://github.com/favicon.ico"/></a>
        </div>
        <p>Use the sidebar to navigate the page</p>
      </Layout>
    )
  }
}

export default HomePage