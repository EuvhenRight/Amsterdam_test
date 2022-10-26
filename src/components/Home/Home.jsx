import React from "react";
import {ImageListItemBar, Box, ImageList} from '@mui/material';
import HOME_P from "../utils/databases-for-React-Native-app.webp";



const styles = {
    heroContainer: {
        height: 1200,
        backgroundImage: `url(${HOME_P})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw)`,

    }
};


const Home = () => {


    return (
        <Box style={styles.heroContainer}>
                <ImageListItemBar
                    title={"Website-Portfolio"}
                    subtitle={' by: Uhnivenko Yevhen'}
                    fontSize='55px'
                    position="bottom"

                />
        </Box>
    )

}

export default Home;


