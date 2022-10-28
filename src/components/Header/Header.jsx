import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import header from "./Header.module.scss"
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Divider,
    Toolbar,
    Menu,
    MenuItem,
    styled,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Logo from "./../utils/IMAGE 2022-08-05 16:43:07.jpg";
import {FormControlLabel, Stack, Tooltip} from "@mui/material";
import SwitchButton from "./Switch";
import {ColorModeContext} from "../theme";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: 3
})


const Header = () => {

    const colorMode = useContext(ColorModeContext)

    const [openUserMenu, SetOpenUserMenu] = useState(null)

    const handleOpenUserMenu = (even) => {
        SetOpenUserMenu(even.currentTarget)
    }

    const handleCloseUserMenu = () => {
        SetOpenUserMenu(null)
    }

    return (
        <>
            <AppBar color="primary" position="fixed">
                <Container fixed className={header.main}>
                    <StyledToolBar disableGutters>
                        <Stack fontFamily={'Fuzzy Bubbles,cursive'}
                               fontWeight={700}
                               fontSize={'35px'}
                               direction="row"
                               spacing={1}
                               sx={{
                                   alignItems: "center"
                               }}>
                            <IconButton component={NavLink} to={"/"}>
                                <HomeIcon sx={{fontSize: 40}} />
                            </IconButton>
                            <Box sx={{display: {xs: "none", sm: {fontSize: 10}, md: 'block'}}}>
                               My little React Js work
                            </Box>
                            <FormControlLabel
                                control={<SwitchButton onChange={colorMode.toggleColorMode}
                                                       sx={{m: 1}} defaultChecked/>}
                            />
                        </Stack>
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Click me">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip>
                            <IconButton sx={{fontSize: 15}}>
                                <Avatar alt="MyLogo" src={Logo}/>
                            </IconButton>
                            <Menu
                                sx={{mt: '45px'}}
                                anchorEl={openUserMenu}
                                id="account-menu"
                                open={Boolean(openUserMenu)}
                                onClose={handleCloseUserMenu}
                                onClick={handleCloseUserMenu}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink className={header.main__link}
                                          to={"/project"}>Project</NavLink>
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink
                                        className={header.main__link}
                                        to={"/cv/contact"}
                                    >My contacts</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink
                                        className={header.main__link}
                                        to={"/cv/summary"}>Summary</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink
                                        className={header.main__link}
                                        to={"/cv/qualification"}>Qualification</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink
                                        className={header.main__link}
                                        to={"/cv/education"}>Education</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink
                                        className={header.main__link}
                                        to={"/cv/work_experience"}>WorkExperience</NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <NavLink
                                        className={header.main__link}
                                        to={"/cv/interest"}>Interest</NavLink>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </StyledToolBar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header;
