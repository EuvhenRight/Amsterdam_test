import './App.module.scss';
import React from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";
import CreatedQuestionList from "./components/CreatedQuestionList/CreatedQuestionList";
import Header from "./components/Header/Header";
import NotFound from "./components/Not Found/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/CV/Contact";
import Summary from "./components/CV/Summary";
import WorkExperience from "./components/CV/Work_experience";
import Qualification from "./components/CV/Qualification";
import Interest from "./components/CV/Interest";
import Education from "./components/CV/Education";
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {ColorModeContext, useMode} from "./components/theme";


const App = () => {

    const [theme, colorMode] = useMode()

    // const darkTheme = createTheme(getDesignTheme(mode))


    return (
        <HashRouter>
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box fontFamily={'LetteraProLight, monospace'}>
                    <Header />
                    <Routes>
                        <Route>
                            <Route path="/" element={<Home/>}/>
                            <Route>
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
                </Box>
            </ThemeProvider>
            </ColorModeContext.Provider>
        </HashRouter>
    )
}
export default App;
