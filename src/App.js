import logo from './logo.svg';
import './App.css';
import ToDoListSection from './home-page/to-do-list-section';
import ReactIntroSection from './home-page/react-intro-section';
import ConversationListSection from './chat/conversation-list-section';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/home_page";
import ProfilePage from "./pages/profile_page";
import NoPage from "./pages/no_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blogs" element={<ProfilePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  /*
  return (
    <>
      <div className="MainContainer">
        <ConversationListSection />
        <ToDoListSection />
        <ReactIntroSection />
      </div>
    </>
  );
  */
}

export default App;
