import Link from "next/link"

function Layout(props){
  function toggleSidebar(){
    var sidebar = document.getElementsByClassName('sidebar')[0]
    if(sidebar.hidden == false){
      sidebar.style.width = `0`
      setTimeout(()=>{
        sidebar.hidden = true
      }, 256)
    }else{
      sidebar.hidden = false
      for(var i = 0; i < 220; i++){
        setTimeout(()=>{
          sidebar.style.width = `${i}px`
        }, 5)
      }
      // sidebar.style.width = `220px`
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
          font-family: Monospace;
        }
        
        .sidebar-toggle{
          float: left;
          cursor: pointer;
          position: relative;
          z-index: 900;
        }
        .sidebar-toggle hr{
          width: 10px;
          padding: 1px 9px;
          background-color: black;
          border: 1px solid black;
        }
        .sidebar{
          position: absolute;
          left: 0;
          top: 0;
          float: left;
          height: 98%;
          width: 0;
          background-color: white;
          border-right: 3px solid;
          border-bottom: 3px solid;
          border-top: 3px solid;
          font-family: Arial;
          transition: 0.6s;
        }
        .sidebar div{
          width: 100%;
          cursor: pointer;
          padding-top: 10px;
          padding-bottom: 10px;
          text-align: center;
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
        <Link href="https://blogs.jdaniels.me"><div>Blogs</div></Link>
      </div>
      <div className="content">{props.children}</div>
      <div className="footer">
        <p>Copyright PDanielY</p>
      </div>
    </div>
  )
}

export default Layout