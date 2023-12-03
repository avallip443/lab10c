import logo from './logo.svg';
import pic from './dance.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />

        <div claNamess="heading">
          <h1>Welcome to My Lab 10 Web Page!</h1>
          <h3 className="alt-colour">I made this page using React.js</h3>
        </div>

        <div className="info">
          <div className="installation-text">
            <h4 className="alt-colour">How I Installed React</h4>
            <p>I installed Node.js and npm and set up the correct environment variables to set up my development environment. Then, I created a folder and used Windows Powershell to create a React application. After, I used VS Code to modify the files to create this website :)).</p>
          </div>
          <div className="challenges-text">
            <h4 className="alt-colour">Challenges I Faced</h4>
            <p>I felt that the initial set up of Node.js and React was challenging because I was getting a few errors using the create-react-app command. It was also overwhelming to read through and understand what all the given files are supposed to do. Reading the React documentation and watching a few YouTube videos helped make this process easier to understand and more managable!</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
