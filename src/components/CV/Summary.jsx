import React from "react";
// import cv from "./CV.module.scss";
import SideBar from "./SideBar";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Picture from './../utils/react-696x366.jpeg'
import {Container} from "@mui/material";


const Summary = () => {

    return (
        <>
            <Box mt={10}>
                <SideBar/>
                <Container maxWidth="md">
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{height: 300}}
                            image={Picture}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                POSITION:
                                <br/>
                                JUNIOR REACT JS DEVELOPER
                            </Typography>
                            <Typography gutterBottom variant="button" component="div">
                                OBJECTIVES:
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
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export default Summary;


