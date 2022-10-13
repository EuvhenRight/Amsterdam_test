import React from "react";
import cv from "./CV.module.scss";
import SideBar from "./SideBar";
import {Box, Card, CardContent, CardMedia, ImageList, ImageListItem, ImageListItemBar, Typography} from "@mui/material";
import {Avatar, Container, Tooltip} from "@material-ui/core";
import Skills from "../utils/Skills.jpeg";
import IconButton from "@mui/material/IconButton";
import Photoshop from "../utils/Photoshop.webp";
import WebD from "../utils/web-design.png";
import HTML from "../utils/HTML.png";
import CSS from "../utils/CSS3.png";
import LESS from "../utils/Less.png";
import SASS from "../utils/Saas.png";
import RWD from "../utils/Responcive Web design.png";
import CSSMQ from "../utils/mediaqueries.png";
import BOOTSTRAP from "../utils/bootsrap.png";
import MATERIAL_UA from "../utils/Material Ui.png";
import CBCOMPATIBILITY from "../utils/CBCOMPATIBILTY.png";
import JS from "../utils/JS.svg.png";
import GIT from "../utils/github-logo-label-text-symbol-transparent-png-2425199.png";
import EVENT from "../utils/EVENTS.png";
import EVENTLOOP from "../utils/how-node-js-works.png";
import DOM from "../utils/DOM.png";
import BOM from "../utils/BOM.jpeg";
import NODE from "../utils/nodejs.png";
import BDC from "../utils/Website-design-and-development-in-USA.png"
import AJAX from "../utils/AJAX.svg.png";
import JSON from "../utils/JSON.jpeg";
import OOPJS from "../utils/oopjs.webp";
import REACT from "../utils/REACT.png";
import REACT_M from "../utils/Reactt+MaterialUI.png";
import TS from "../utils/TS.png";
import SQL from "../utils/SQL.png";
import SDLC from "../utils/SDLC_-_Software_Development_Life_Cycle.png";
import WEBPACK from "../utils/webpack.png";


const ItemData = [
    {
        img: Photoshop
    },
    {
        img: WebD
    },
    {
        img: HTML
    },
    {
        img: CSS
    },
    {
        img: LESS
    },
    {
        img: SASS
    },
    {
        img: RWD
    },
    {
        img: CSSMQ
    },
    {
        img: BOOTSTRAP
    },
    {
        img: MATERIAL_UA
    },
    {
        img: CBCOMPATIBILITY
    },
    {
        img: JS
    },
    {
        img: GIT
    },
    {
        img: EVENT
    },
    {
        img: EVENTLOOP
    },
    {
        img: JSON
    },
    {
        img: BOM
    },
    {
        img: DOM
    },
    {
        img: NODE
    },
    {
        img: BDC
    },
    {
        img: AJAX
    },
    {
        img: OOPJS
    },
    {
        img: REACT
    },
    {
        img: REACT_M
    },
    {
        img: TS
    },
    {
        img: SQL
    },
    {
        img: WEBPACK
    },
    {
        img: SDLC
    }
]


const Qualification = () => {

    return (
        <>
            <SideBar/>
            <Box mt={10}>
                <Container maxWidth="md">
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{height: 300}}
                            image={Skills}
                            alt="skills"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                QUALIFICATIONS & SKILLS:
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                A beginner in IT industry with acquired knowledge and practical skills in FrontEnd and
                                BackEnd Development (Node JS)
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{mt: 2}}>
                                Summary skills:
                            </Typography>
                            <ImageList variant="masonry" cols={4} gap={9}>
                                {ItemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            {/*<Typography variant="subtitle1" color="text.secondary">*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='ADOBE_PHOTOSHOP'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={Photoshop}*/}
                            {/*                alt="webD"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='WEB_DESIGN'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="100"*/}
                            {/*                height="100"*/}
                            {/*                image={WebD}*/}
                            {/*                alt="webD"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='HTML/HTML5'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={HTML}*/}
                            {/*                alt="HTML"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='CSS/CSS3'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={CSS}*/}
                            {/*                alt="CSS"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='LESS'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={LESS}*/}
                            {/*                alt="less"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='SASS'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={SASS}*/}
                            {/*                alt="sass"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='RESPONSIVE_WEB_DESIGN'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="100"*/}
                            {/*                height="100"*/}
                            {/*                image={RWD}*/}
                            {/*                alt="RWD"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='CSS_MEDIA_QUERIES'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={CSSMQ}*/}
                            {/*                alt="CSSMQ"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='BOOTSTRAP'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={BOOTSTRAP}*/}
                            {/*                alt="bootstrap"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='MATERIAL_UA'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={MATERIAL_UA}*/}
                            {/*                alt="MATERIAL_UA"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='CROSS_BROWSER_COMPATIBILITY'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="100"*/}
                            {/*                height="100"*/}
                            {/*                image={CBCOMPATIBILITY}*/}
                            {/*                alt="CBCOMPATIBILITY"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='JS'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="100"*/}
                            {/*                height="100"*/}
                            {/*                image={JS}*/}
                            {/*                alt="JS"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='building_of_the_dynamic_content'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={BDC}*/}
                            {/*                alt="BDC"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='understanding_of_JS_OOP'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={OOPJS}*/}
                            {/*                alt="OOPJS"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='understanding_of_the_event_loop_mechanism'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="150"*/}
                            {/*                height="150"*/}
                            {/*                image={EVENTLOOP}*/}
                            {/*                alt="EVENTLOOP"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='WEBPACK'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={WEBPACK}*/}
                            {/*                alt="WEBPACK"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='EVENT'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={EVENT}*/}
                            {/*                alt="EVENT"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='BOM'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={BOM}*/}
                            {/*                alt="BOM"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='DOM'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={DOM}*/}
                            {/*                alt="DOM"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='GIT'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={GIT}*/}
                            {/*                alt="GIT"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='NODE_JS'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={NODE}*/}
                            {/*                alt="NODE_JS"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='AJAX'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={AJAX}*/}
                            {/*                alt="AJAX"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='SDLC_Software_Development_Life_Cycle'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="150"*/}
                            {/*                height="150"*/}
                            {/*                image={SDLC}*/}
                            {/*                alt="SDLC"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='JSON'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={JSON}*/}
                            {/*                alt="JSON"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='REACT_JS'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="100"*/}
                            {/*                height="100"*/}
                            {/*                image={REACT}*/}
                            {/*                alt="REACT"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='REACT_JS_MATERIAL_UI'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={REACT_M}*/}
                            {/*                alt="REACT_M"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='TypeScript'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="100"*/}
                            {/*                height="100"*/}
                            {/*                image={TS}*/}
                            {/*                alt="TS"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*    <IconButton sx={{m: 2}}>*/}
                            {/*        <Tooltip title='SQL(basic)'>*/}
                            {/*            <CardMedia*/}
                            {/*                component="img"*/}
                            {/*                widht="60"*/}
                            {/*                height="60"*/}
                            {/*                image={SQL}*/}
                            {/*                alt="SQL"*/}
                            {/*            />*/}
                            {/*        </Tooltip>*/}
                            {/*    </IconButton>*/}
                            {/*</Typography>*/}
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>

    )
}

export default Qualification;


