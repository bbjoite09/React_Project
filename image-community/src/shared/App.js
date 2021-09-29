import './App.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login"

import Header from "./Header";
import {Grid} from "../elements"

function App() {
    return (
        <React.Fragment>
            <Header/>
            <BrowserRouter>
                <Route path="/" exact component={PostList}/>
                <Route path="/login" exact component={Login}/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
