import React from "react";
// import cv from "./CV.module.scss";
import SideBar from "./SideBar";
import {Box, Card, Container, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import MOTOBIKES from "../utils/MOTO.jpeg";
import BOOKS from "../utils/Books.jpeg";
import ANIME from "../utils/ANIME.jpeg";
import TRAVEL from "../utils/Hikking.webp";
import LEARNING from "../utils/Learning.jpeg";
import THEATER from "../utils/Theater.jpeg";
import GAME from "../utils/GAME.webp";
import JOGGING from "../utils/jogging.jpeg";
import {Typography} from "@mui/material";
import SOMMELIER from "../utils/Sommelie.jpeg";


const ItemData = [
    {
        img: MOTOBIKES,
        title: 'Kawasaki 750R Black Beauty'
    },
    {
        img: BOOKS,
        title: 'Reading Books'
    },
    {
        img: ANIME,
        title: 'Anime'
    },
    {
        img: LEARNING,
        title: 'Leaning, Leaning, Leaning,'
    },
    {
        img: JOGGING,
        title: 'Jogging'
    },
    {
        img: TRAVEL,
        title: 'Travel'
    },
    {
        img: THEATER,
        title: 'Theater'
    },
    {
        img: GAME,
        title: 'Board games'
    },
    {
        img: SOMMELIER,
        title: 'Sommelier'
    }
]

const Interest = () => {

    return (
        <>
            <Box mt={10}>
                <SideBar/>
                <Container maxWidth="md">
                    <Card>
                        <Typography component="div" variant="h5"  >
                            INTEREST:
                        </Typography>
                        <ImageList variant="masonry" cols={3} gap={10}>
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
                    </Card>
                </Container>
            </Box>
        </>

    )
}

export default Interest;
