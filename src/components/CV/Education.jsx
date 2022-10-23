import React from "react";
// import cv from "./CV.module.scss";
import Geekbrains from "../utils/GeekBrains_logo.png";
import SideBar from "./SideBar";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography
} from "@mui/material";
import {Container} from "@mui/material";
import Marketing from "../utils/Marketing.png";
import Economics from "../utils/ECONOMICS.jpeg";
import IconButton from "@mui/material/IconButton";
import MD from "../utils/masters_degree.png";
import DDUU from "../utils/DDUU.png";
import HTML from "../utils/HTML_S.png";
import HTML_PRO from "../utils/HTML PRO.png";
import REACT_S from "../utils/REACT_S.png";
import LINUX from "../utils/LINUX.png";
import JS from "../utils/JS.png";
import NODE from "../utils/NODE.png";
import TOOLS from "../utils/TOOLS.png";
import DATA from "../utils/DATA.png";


const ItemData = [
    {
        img: HTML,
        title: '«HTML/CSS. Interactive course»'
    },
    {
        img: HTML_PRO,
        title: '«HTML&CSS. Advanced level»'
    },
    {
        img: REACT_S,
        title: '«ReactJS basics»'
    },
    {
        img: LINUX,
        title: '«Linux. Administration of clients»'
    },
    {
        img: JS,
        title: '«JavaScript. Beginner level»'
    },
    {
        img: NODE,
        title: '«Node.js»'
    },
    {
        img: TOOLS,
        title: '«Assembling tools»'
    },
    {
        img: DATA,
        title: '«Databases. Basics»'
    }
]


const Education = () => {


    return (
        <>
            <Box mt={10}>
                <SideBar/>
                <Container maxWidth="md">
                    <Card>
                        <Typography sx={{textAlign: "center"}} gutterBottom variant="h6" component="div">
                            EDUCATION:
                            <br/>
                            FullStack JS Developer
                            <br/>
                            Sep 2021 — Dec 2022
                            <br/>
                            <IconButton
                                href={"https://gb.ru/"}
                                sx={{m: 2}}
                            >
                                <CardMedia
                                    component="img"
                                    widht="60"
                                    height="60"
                                    image={Geekbrains}
                                    alt="Geekbrain"
                                />
                            </IconButton>
                        </Typography>
                        <ImageList variant="standard">
                            {ItemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        position="below"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Typography gutterBottom variant="h6" component="div">
                            Basic Specialty:
                        </Typography>
                        <ImageList variant="standard">
                            <ImageListItem>
                                <img
                                    src={Marketing}
                                    alt="Marketing"
                                    loading="lazy"
                                />
                            </ImageListItem>
                            <ImageListItem>
                                <img
                                    src={Economics}
                                    alt="Economics"
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    position="below"
                                />
                            </ImageListItem>
                        </ImageList>
                        <CardContent>
                            <Typography sx={{textAlign: "center"}}
                                        gutterBottom
                                        variant="subtitle1"
                                        color="text.secondary">
                                Marketing and Economics
                                <IconButton>
                                    <CardMedia
                                        component="img"
                                        widht="100"
                                        height="100"
                                        image={MD}
                                        alt="Geekbrain"
                                    />
                                </IconButton>
                                Donetsk State University of Management
                                <IconButton sx={{m: 2}}
                                            href={" https://en.wikipedia.org/wiki/Donetsk_State_University_of_Management"}>
                                    <CardMedia
                                        component="img"
                                        widht="100"
                                        height="100"
                                        image={DDUU}
                                        alt="DDUU"
                                    />
                                </IconButton>
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}
export default Education;


