import React from "react";
import {Card, ImageListItemBar, ImageListItem, Box} from '@mui/material';
import HOME_P from "../utils/databases-for-React-Native-app.webp";


const Home = () => {


    return (
        <Box>
            <Card style={{ display:'flex', justifyContent:'center', maxHeight:'70%' }}>
                <ImageListItem variant="woven" >
                    <img
                        src={HOME_P}
                        alt={'home'}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={"Website-Portfolio"}
                        subtitle={' by: Uhnivenko Yevhen'}
                        fontSize='45px'
                        position="bottom"

                    />
                </ImageListItem>
            </Card>
        </Box>
    )

}

export default Home;


