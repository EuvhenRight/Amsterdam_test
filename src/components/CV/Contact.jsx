import React from "react";
import Linkedin from "../../components/utils/LinkedIn.webp"
import cv from "./CV.module.scss";
import Git from "../../components/utils/github-logo-label-text-symbol-transparent-png-2425199.png"
import Amsterdam from "../../components/utils/pngtree-amsterdam-skyline-street-laser-design-png-image_5421668.png"
import Logo from "../../components/utils/OSTROHLIADxEUROTRIPS-214.JPG"
import SideBar from "./SideBar";
import {Box, Card, CardContent, CardMedia, Container, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Avatar, Tooltip} from "@material-ui/core";
import Ukraine from "../utils/Ukraine.png";
import USA from "../utils/USA.png";


const Contact = () => {

    return (
        <>
            <Box mt={10}>
                <SideBar/>
                <Container maxWidth="md">
                    <Card sx={{display: 'flex'}}>
                        <CardMedia
                            sx={{width: 430}}
                            component="img"
                            image={Logo}
                            alt="MyPhoto"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{mt: 8}}>
                                Uhnivenko Yevhen
                                <br/>
                                tel: +31-68-763-000-5
                                <br/>
                                e-mail: ugnivenko.ea@gmail.com
                            </Typography>
                            <Typography gutterBottom variant="button" component="div">
                                <IconButton href={'https:www.linkedin.com/in/yevhen-uhnivenko-3a9503161/?locale=en_US'}
                                            sx={{m: 2}}
                                >
                                    <CardMedia
                                        component="img"
                                        widht="60"
                                        height="60"
                                        image={Linkedin}
                                        alt="Link"
                                    />
                                </IconButton>
                                <IconButton href={'https://github.com/EuvhenRight'}
                                            sx={{m: 2}}
                                >
                                    <CardMedia
                                        component="img"
                                        widht="60"
                                        height="60"
                                        image={Git}
                                        alt="Git"
                                    />
                                </IconButton>
                                <IconButton href={'https://amsterdam.nl'}
                                            sx={{m: 2}}
                                >
                                    <CardMedia
                                        component="img"
                                        widht="200"
                                        height="100"
                                        image={Amsterdam}
                                        alt="Amsterdam"
                                    />
                                </IconButton>
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Looking for a position of Junior Front-end Developer for React JS and aimed to become
                                Senior
                                FULLSTACK Developer of web and mobile applications (React Developer) in several years
                                Employment: full time, part time, project work, remote work.
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                Citizenship: Amsterdam, Netherlands.
                                <br/>
                                Permission to work: Europe
                            </Typography>
                            <Typography sx={{display: 'flex', gap: 2, mt: 1}}
                                        variant="subtitle1"
                                        component="div"
                                        color="text.secondary">
                                Foreign languages:
                                <Tooltip title='English(intermediate)'>
                                    <Avatar alt="usa" src={USA}/>
                                </Tooltip>
                                <Tooltip title='Ukrainian(native)'>
                                    <Avatar alt="ukr" src={Ukraine}/>
                                </Tooltip>
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export default Contact;


