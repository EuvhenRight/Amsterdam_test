import './App.module.scss';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatedQuestionList from "./components/CreatedQuestionList/CreatedQuestionList";
import classes from "./App.module.scss";




const App = () => {
    return (
        <BrowserRouter>
                <div className={classes.components}>
                <Routes>
                    <Route path="/" element={<CreatedQuestionList/>}>
                    </Route>
                </Routes>
                </div>
        </BrowserRouter>
    )
}
export default App;
