import React from 'react';
import Header from './Header/Header';
import TinderCards from './Cards/TinderCards'
import SwipeButtons from './ButtonsFotter/Buttons'
import Chats from './ChatsPage/Chats'
import ChatScreen from './ChatScreenPage/ChatScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/chats/:person">
          <Header backButton="/chats" />
          <ChatScreen></ChatScreen>
        </Route>
        <Route path="/chats">
          <Header backButton="/" />
          <Chats></Chats>
          </Route>
        <Route path="/">
        <Header/>
          <TinderCards></TinderCards>
          <SwipeButtons/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
