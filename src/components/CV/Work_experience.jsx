import React from "react";
// import cv from "./CV.module.scss";
import SideBar from "./SideBar";
import {Box, Card, CardContent, CardMedia, Container, Typography} from "@mui/material";
import SPRAY from "../utils/Aerosol.jpeg";
import IconButton from "@mui/material/IconButton";
import HTA from "../utils/HTA.png";
import YouTube from "../utils/YouTube.png";
import {Tooltip} from "@mui/material";


const WorkExperience = () => {

    return (
        <>
            <Box mt={10}>
                <SideBar/>
                <Container maxWidth="md">
                    <Card>
                        <CardMedia
                            sx={{height: 300}}
                            component="img"
                            image={SPRAY}
                            alt="Spray"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{mt: 2}}>
                                WORK EXPERIENCE:
                                <br/>
                                High tech aerosol
                                <IconButton href={"https://www.hta.com.ua"}>
                                    <Tooltip title="website">
                                        <CardMedia
                                            component="img"
                                            widht="60"
                                            height="60"
                                            image={HTA}
                                            alt="HTA"
                                        />
                                    </Tooltip>
                                </IconButton>
                            </Typography>
                            <Typography gutterBottom variant="button" component="div">
                                July 2018 — February 2022
                                <br/>
                                Vice President of Sales
                                <br/>
                                I hold the position of commercial director or sales director in High tech aerosol.
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="div" color="text.secondary">
                                Responsibilities:
                                <br/>
                                Carried out marketing research of the advertising services market
                                Organized active sales of own production to corporate clients
                                A proposal was developed for the development of new market segments, identifying
                                market entry with a variety of products
                                <br/>
                                Participated in the development of business plans for the development of the
                                enterprise within his qualifications
                                <br/>
                                Controlled the implementation of the financial and economic results of the commercial
                                activities of the enterprise used the accounting of the fulfillment of orders and
                                contracts
                                <br/>
                                Achievements:
                                <br/>
                                Created his own production line and laboratory for the development of technical products
                                Certification of the quality management system according to the international standard
                                ISO
                                9001:2015
                                <br/>
                                Professional sales team
                                Multiple brands
                                Distribution, market Ukraine and partly Europe
                                Range - up to 150 types of products
                                <br/>
                                The annual turnover of the company is 5,000,000 bottles
                                <br/>
                                Website: https://www.hta.com.ua
                                <IconButton href={"https://youtu.be/RsOZyYf1dTU"}>
                                    <Tooltip title="video">
                                        <CardMedia
                                            component="img"
                                            widht="60"
                                            height="60"
                                            image={YouTube}
                                            alt="HTA"
                                        />
                                    </Tooltip>
                                </IconButton>
                            </Typography>
                            <Typography variant="button">
                                HYSTORY:
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                WEST PARFUME LLC:
                                Commercial Director,
                                July 2018 — February 2022
                                <br/>
                                Delivery LTD:
                                Sales Department,
                                June 2015 — April 2016
                                <br/>
                                OK Wine FMCG retailer:
                                Sommelier,
                                August 2014 — March 2015
                                <br/>
                                Sommelier LLC Importer of alcoholic beverages:
                                Sales Department,
                                February 2013 — May 2014
                                <br/>
                                Obzhora LLC, FMCG retail:
                                Category Manager of Procurement Department,
                                September 2008 — January 2013
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export default WorkExperience;