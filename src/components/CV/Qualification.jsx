import React from "react";
import SideBar from "./SideBar";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography,
    Container
} from "@mui/material";
import Skills from "../utils/Skills.jpeg";
import Photoshop from "../utils/Photoshop.png";
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
import JSON from "../utils/JSON 2.png";
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
                                            alt={'home_page'}
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>

    )
}

export default Qualification;


