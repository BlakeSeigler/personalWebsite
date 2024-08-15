import './App.css';
import Menu from './Menu.js'
import Announcement from './Announcement.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu className="menu-bar"></Menu>
        <h1 className='my-name'>
          Blake Seigler
        </h1>
      </header>
      <body>
        <br className="spacer"></br>
        <Announcement></Announcement>
      </body>
      <footer>
        <p> ©2024 Blake Seigler inc </p>
      </footer>
    </div>
  );
}

export default App;
