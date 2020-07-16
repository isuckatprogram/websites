import Link from "next/link"

function Layout(props){
  function toggleSidebar(){
    var sidebar = document.getElementsByClassName('sidebar')[0]
    if(sidebar.hidden == false){
      sidebar.hidden = true
    }else{
      sidebar.hidden = false
    }
  }

  return (
    <div>
      <style jsx>{`
        @font-face{
          font-family: Quikhand;
          src: url('/fonts/Quikhand.ttf');
        }
        

        .footer{
          position: fixed;
          bottom: 0;
          left: 42%;
          font-family: Quikhand;
        }
        
        .sidebar-toggle{
          float: left;
          cursor: pointer;
          position: relative;
          z-index: 900;
        }
        .sidebar-toggle hr{
          width: 10px;
          padding: 2px 9px;
          background-color: black;
          border: 1px solid black;
        }
        .sidebar{
          position: absolute;
          left: 0;
          top: 0;
          float: left;
          height: 100%;
          width: 220px;
          background-color: white;
          border-right: 3px solid;
          border-bottom: 3px solid;
          border-top: 3px solid;
          font-family: Arial;
        }
        .sidebar div{
          width: 100%;
          cursor: pointer;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .sidebar div:hover{
          background-color: gray;
        }
      `}</style>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <hr/>
        <hr/>
        <hr/>
      </div>
      <div className="sidebar" hidden>
        <br/><br/><br/><br/>
        <Link href="/"><div>Home</div></Link>
        <Link href="/projects"><div>Projects</div></Link>
        <Link href="/about"><div>Who is PDanielY?</div></Link>
      </div>
      <div className="content">{props.children}</div>
      <div className="footer">
        <p>Copyright PDanielY</p>
      </div>
    </div>
  )
}

export default Layout