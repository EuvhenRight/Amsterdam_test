import './App.module.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChatQuestionList from "./components/ChatQuestion/ChatQuestionList";
import classes from "./App.module.css";




const App = () => {
    return (
        <BrowserRouter>
                <div className={classes.components}>
                <Routes>
                    <Route path="/" element={<ChatQuestionList/>}>
                    </Route>
                </Routes>
                </div>
        </BrowserRouter>
    )
}
export default App;
