import React from "react";
import {Box, Stack} from "@mui/material";
import {styled} from "@material-ui/core";
import {theme} from "../Header/Header"
import {ThemeProvider} from "@material-ui/core/styles";
import SideBar from "./SideBar";

const StyledBox = styled(Box)(({theme}) => ({
    color: theme.palette.secondary.light
}))


const CvList = () => {

    return (
        <ThemeProvider theme={theme}>
        <StyledBox mt={10}>
                <SideBar />
        </StyledBox>
        </ThemeProvider>
    )
}

export default CvList;


