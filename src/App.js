import logo from './logo.svg';
import './App.css';
import ToDoListSection from './home-page/ToDoListSection';

function App() {
  return (
    <>
      <div className="MainContainer">
        <ToDoListSection />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
        </div>
    </>
  );
}

export default App;
