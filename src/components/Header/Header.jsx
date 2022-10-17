import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import header from "./Header.module.scss"
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Divider,
    Toolbar,
    ListItemIcon,
    Menu,
    MenuItem,
    styled,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Logo from "./../utils/IMAGE 2022-08-05 16:43:07.jpg";
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {FormControlLabel, Stack, Tooltip} from "@mui/material";
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import SwitchButton from "./Switch";
import {ColorModeContext} from "../theme";


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

    // const handleChangeTheme = (e) => {
    //     setMode(mode === 'light' ? 'dark' : 'light')
    // }

    // const classes = useStyles();

    return (
        <>
            <AppBar color="primary" position="fixed">
                <Container fixed className={header.main}>
                    <StyledToolBar disableGutters>
                        <Stack  fontFamily={'Fuzzy Bubbles,cursive'}
                                fontWeight={700}
                                fontSize={'35px'}
                                direction="row"
                               spacing={2}
                               sx={{
                                   alignItems: "center"
                               }}>
                            <ScienceSharpIcon sx={{fontSize: 40}}/>
                            <Link to={"/"}
                                  className={header.main__link}
                            >My little React Js work </Link>
                            <FormControlLabel
                                control={<SwitchButton onChange={colorMode.toggleColorMode}
                                                       sx={{m: 1}} defaultChecked/>}
                            />
                        </Stack>
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Click me">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar alt="MyLogo" src={Logo}/>
                                </IconButton>
                            </Tooltip>
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
                                    <ListItemIcon>
                                        <AccountTreeIcon/>
                                    </ListItemIcon>
                                    <Link className={header.main__link}
                                          to={"/project"}>Project</Link>
                                </MenuItem>
                                <Divider/>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <ListItemIcon>
                                        <PersonPinSharpIcon/>
                                    </ListItemIcon>
                                    <Link className={header.main__link}
                                          to={"/cv/contact"}>CV</Link>
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
