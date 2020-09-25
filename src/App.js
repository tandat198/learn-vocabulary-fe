import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/sign-in' render={() => <SignIn />} />
                <Route exact path='/sign-up' component={SignUp} />
            </Switch>
            <BottomNav />
        </Router>
    );
}

export default App;
