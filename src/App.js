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
import LoginPage from "./pages/auth/login_page";
import RegisterPage from "./pages/auth/register_page";
import ShopsPage from "./pages/shops/shops_page";
import ShopPage from "./pages/shops/shop_page";


import { createStore } from 'redux';
import { useReducer } from 'react';
import { Provider, connect } from 'react-redux';


var store = createStore(useReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/shops" element={<ShopsPage />} />
            <Route path="/shops/:url" element={<ShopPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


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

