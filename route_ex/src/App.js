import React from "react";
import { render } from "react-dom";

import { Route } from "react-router-dom";

import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Route path="/" exact component={Home}/>
                <Route path="/cat" component={Cat}/>
                <Route path="/dog" component={Dog}/>
            </div>
        );
    }
}

export default App;