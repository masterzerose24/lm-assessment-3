import React from "react";
import "./App.css";
import MainPage from "./scenes/mainPage/MainPage";
import PostPage from './scenes/postPage/ViewPost';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="main-component" style={{ marginTop: "30px" }}>
      <h1 className="ui center aligned header">HCPortal</h1>
      <div>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/post/:id" component={PostPage}></Route>
      </div>
    </div>
  );
}

export default App;
