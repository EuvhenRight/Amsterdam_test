import React from "react";
import {Box} from "@mui/material";
import {ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import SsidChartSharpIcon from '@mui/icons-material/SsidChartSharp';
import {NavLink} from "react-router-dom";
import header from "../Header/Header.module.scss";
import {blue, yellow} from "@mui/material/colors";



const SideBar = () => {

    return (
        <Box flex={3}>
            <Box position="fixed">
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <AlternateEmailSharpIcon/>
                        </ListItemIcon>
                        <ListItemText> <NavLink
                            style={({isActive}) => ({color: isActive ? blue[700] : yellow[900]})}
                            className={header.main__link}
                            to={"/cv/contact"}
                        >My contacts</NavLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SummarizeSharpIcon/>
                        </ListItemIcon>
                        <ListItemText><NavLink
                            style={({isActive}) => ({color: isActive ? blue[700] : yellow[900]})}
                            className={header.main__link}
                            to={"/cv/summary"}>Summary</NavLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonAddSharpIcon/>
                        </ListItemIcon>
                        <ListItemText><NavLink
                            style={({isActive}) => ({color: isActive ? blue[700] : yellow[900]})}
                            className={header.main__link}
                            to={"/cv/qualification"}>Qualification</NavLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SchoolSharpIcon/>
                        </ListItemIcon>
                        <ListItemText><NavLink
                            style={({isActive}) => ({color: isActive ? blue[700] : yellow[900]})}
                            className={header.main__link}
                            to={"/cv/education"}>Education</NavLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SsidChartSharpIcon/>
                        </ListItemIcon>
                        <ListItemText><NavLink
                            style={({isActive}) => ({color: isActive ? blue[700] : yellow[900]})}
                            className={header.main__link}
                            to={"/cv/work_experience"}>WorkExperience</NavLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FitnessCenterSharpIcon/>
                        </ListItemIcon>
                        <ListItemText><NavLink
                            style={({isActive}) => ({color: isActive ? blue[700] : yellow[900]})}
                            className={header.main__link}
                            to={"/cv/interest"}>Interest</NavLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </Box>
        </Box>

    )
}

export default SideBar;


