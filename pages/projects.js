import Layout from "../components/Layout"
import Head from "next/head"

class ProjectPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <Layout>
        <Head>
          <title>JDanielS - Projects</title>
        </Head>
        <style jsx>{`
          .projects{
            display: grid;
            grid-template-columns: auto auto auto;
            text-align: center;
          }
          .project{
            border: 2px solid;
            padding: 10px 10px;
            width: 190px;
            height: fit-content;
            margin-top: 5px;
          }
        `}</style><br/><br/><br/><br/>
        <div className="projects">
          <div className="project">
            <a href="https://bupple.tech"><strong>Bupple</strong></a>
            <p>Bupple was a small project I created for the PieMadd2020 hackathon. The theme was "Connect People". You can chat with other people if there are people online.</p>
          </div>
          <div className="project">
            <a href="https://mikros--pdaniely.repl.co/"><strong>Mikros</strong></a>
            <p>Mikros was a url shortner I made while I was learning how to use python in flask.</p>
          </div>
          <div className="project">
            <a href="https://text-to-speech-chat.pdaniely.repl.co/"><strong>TTS Chat</strong></a>
            <p>This was a project I created for fun. It was inspired from a roblox youtube video. It convert your message to audio.</p>
          </div>
          <div className="project">
            <a href="https://www.npmjs.com/package/repl-talk"><strong>Repl Talk Node.js Libary</strong></a>
            <p>This was a node.js libary that allows you to interact with the repl.it api. It's dead and no one uses it anymore but I still like to feature it.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectPage