import './Home.css';
import Menu from './Menu.js'


function Home() {
  return (
    <html className="home">
      <header className="home-header">
        <Menu className="menu-bar"></Menu>
      </header>
      <body>
        <div className="main-text">
            <h1>Hi, I'm Blake</h1>
            <h3>This is my website</h3>
        </div>
      </body>
        
      <footer>
        <p> ©2025 Blake Seigler inc </p>
      </footer>
    </html>
  );
}

export default Home;
