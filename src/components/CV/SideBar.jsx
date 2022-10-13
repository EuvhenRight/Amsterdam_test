import React from "react";
import {Box} from "@material-ui/core";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
import SsidChartSharpIcon from '@mui/icons-material/SsidChartSharp';
import {Link} from "react-router-dom";
import header from "../Header/Header.module.scss";

const SideBar = () => {

    return (
        <Box flex={3}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AlternateEmailSharpIcon/>
                            </ListItemIcon>
                            <ListItemText> <Link className={header.main__link}
                                                 to={"/cv/contact"}>My contacts</Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SummarizeSharpIcon/>
                            </ListItemIcon>
                            <ListItemText><Link className={header.main__link}
                                                to={"/cv/summary"}>Summary</Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonAddSharpIcon/>
                            </ListItemIcon>
                            <ListItemText><Link className={header.main__link}
                                                to={"/cv/qualification"}>Qualification</Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SchoolSharpIcon/>
                            </ListItemIcon>
                            <ListItemText><Link className={header.main__link}
                                                to={"/cv/education"}>Education</Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SsidChartSharpIcon/>
                            </ListItemIcon>
                            <ListItemText><Link className={header.main__link}
                                                to={"/cv/work_experience"}>WorkExperience</Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FitnessCenterSharpIcon/>
                            </ListItemIcon>
                            <ListItemText><Link className={header.main__link}
                                                to={"/cv/interest"}>Interest</Link>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>

    )
}

export default SideBar;


