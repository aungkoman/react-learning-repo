import logo from './logo.svg';
import './App.css';
import ToDoListSection from './home-page/to-do-list-section';
import ReactIntroSection from './home-page/react-intro-section';
import ConversationListSection from './chat/conversation-list-section';

function App() {
  return (
    <>
      <div className="MainContainer">
        <ConversationListSection />
        <ToDoListSection />
        <ReactIntroSection />
      </div>
    </>
  );
}

export default App;
