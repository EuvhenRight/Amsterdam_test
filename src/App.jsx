import './App.module.scss';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatedQuestionList from "./components/CreatedQuestionList/CreatedQuestionList";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Letter from "./components/Letter/Letter";
import NotFound from "./components/Not Found/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/CV/Contact";
import Summary from "./components/CV/Summary";
import WorkExperience from "./components/CV/Work_experience";
import Qualification from "./components/CV/Qualification";
import Interest from "./components/CV/Interest";
import Education from "./components/CV/Education";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline, useTheme} from "@mui/material";
import {deepOrange, grey, red, yellow} from "@mui/material/colors";
import {PaletteMode} from "@mui/material";

export const getDesignTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: yellow[600]
                },
                secondary: {
                    main: grey[900],
                    light: grey[600]
                },
                otherColor: {
                    main: red[400]
                },
            }
            : {

                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});

const App = () => {
    const theme = useTheme();

    const [mode, setMode] = useState('light')


    return (
                <BrowserRouter>
                    <div className={classes.components}>
                        <div>
                            <Header setMode={setMode} mode={mode}/>
                        </div>
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/letter" element={<Letter/>}/>
                                <Route>
                                    {/*<Route path="/cv" element={<CvList/>}/>*/}
                                    <Route path="/cv/contact" element={<Contact/>}/>
                                    <Route path="/cv/summary" element={<Summary/>}/>
                                    <Route path="/cv/qualification" element={<Qualification/>}/>
                                    <Route path="/cv/education" element={<Education/>}/>
                                    <Route path="/cv/work_experience" element={<WorkExperience/>}/>
                                    <Route path="/cv/interest" element={<Interest/>}/>
                                </Route>
                                <Route path="/project" element={<CreatedQuestionList/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Route>
                        </Routes>
                    </div>
                </BrowserRouter>
    )
}
export default App;
