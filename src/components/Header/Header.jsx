import React, {useState} from "react";
import {Link} from "react-router-dom";
import header from "./Header.module.scss"
import {
    AppBar,
    Avatar,
    Box,
    Container,
    Divider,
    ListItemIcon,
    MenuItem, styled,
    Toolbar,
} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import {makeStyles, ThemeProvider, createTheme} from "@material-ui/core/styles";
import {grey, red, yellow} from "@mui/material/colors";
import Logo from "./../utils/IMAGE 2022-08-05 16:43:07.jpg"
import {Menu} from "@material-ui/core";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {Fade, FormControlLabel, Stack, Tooltip} from "@mui/material";
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import SwitchButton from "./Switch";
import {getDesignTheme} from "../../App";

export const theme = createTheme({
    palette: {
        primary: {
            main: yellow[600]
        },
        secondary: {
            main: grey[900],
            light: grey[600]
        },
        otherColor: {
            main: red[400]
        }

    }
})


const useStyles = makeStyles((theme) => ({

    Avatar: {
        width: 50, height: 50
    }
}))


const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: 3
})


const StyledListItemIcon = styled(ListItemIcon)(({theme}) => ({
    color: theme.palette.secondary.main,
    fontSize: 30,
}))

const Header = ({setMode, mode}) => {

    const [openUserMenu, SetOpenUserMenu] = useState(null)

    const handleOpenUserMenu = (even) => {
        SetOpenUserMenu(even.currentTarget)
    }

    const handleChangeTheme = (e) => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }

    const handleCloseUserMenu = () => {
        SetOpenUserMenu(null)
    }

    const classes = useStyles();

    const darkTheme =createTheme(getDesignTheme(mode));

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar color="primary" position="fixed">
                    <Container fixed className={header.main}>
                        <StyledToolBar disableGutters>
                            <Stack direction="row"
                                   spacing={2}
                                   sx={{
                                       alignItems: "center"
                                   }}>
                                <ScienceSharpIcon sx={{fontSize: 30}}/>
                                <Box sx={{display: {xs: "none", sm: "block"}}}>
                                    <Link to={"/"}
                                          className={header.main__link}>My little React Js work </Link>
                                </Box>
                                <FormControlLabel
                                    control={<SwitchButton onChange={handleChangeTheme}
                                                           sx={{m: 1}} defaultChecked/>}
                                />
                            </Stack>
                            <Tooltip title="Click me">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}
                                            aria-controls={openUserMenu ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={openUserMenu ? 'true' : undefined}>
                                    <Avatar className={classes.Avatar} alt="MyLogo" src={Logo}/>
                                </IconButton>
                            </Tooltip>
                        </StyledToolBar>
                        <Menu
                            anchorEl={openUserMenu}
                            id="account-menu"
                            open={Boolean(openUserMenu)}
                            onClose={handleCloseUserMenu}
                            onClick={handleCloseUserMenu}
                            PaperProps={{
                                sx: {
                                    color: red[400],
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 4.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            // anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            // transformOrigin={{horizontal: 'right', vertical: 'top'}}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <StyledListItemIcon>
                                    <AccountTreeIcon/>
                                </StyledListItemIcon>
                                <Link className={header.main__link}
                                      to={"/project"}>Project</Link>
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <StyledListItemIcon>
                                    <HistoryEduIcon/>
                                </StyledListItemIcon>
                                <Link className={header.main__link}
                                      to={"/letter"}>Letter</Link>
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <StyledListItemIcon>
                                    <PersonPinSharpIcon/>
                                </StyledListItemIcon>
                                <Link className={header.main__link}
                                      to={"/cv/contact"}>CV</Link>
                            </MenuItem>
                        </Menu>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default Header;
