import './App.module.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChatQuestionList from "./components/ChatQuestion/ChatQuestionList";
import classes from "./App.module.css";
import ChatQuestion from "./components/ChatQuestion/ChatQuestion";



const App = () => {
    return (
        <BrowserRouter>
                <div className={classes.components}>
                <Routes>
                    <Route path="/" element={<ChatQuestionList/>}>
                        <Route path=":chatQId" element={<ChatQuestion/>}/> {/* TODO dont work and I dont no why... */}
                    </Route>
                </Routes>
                </div>
        </BrowserRouter>
    )
}
export default App;
