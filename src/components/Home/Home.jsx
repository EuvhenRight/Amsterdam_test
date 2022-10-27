import React from "react";
import {ImageListItemBar, ImageList, ImageListItem} from '@mui/material';
import HOME_P from "../utils/databases-for-React-Native-app.webp";


const styles = {
    heroContainer: {
        minHeight: '900px',
        backgroundImage: `url(${HOME_P})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: `calc(100vw)`,
    }
};


const Home = () => {


    return (
        <ImageList
        >
            <ImageListItem variant="masonry" style={styles.heroContainer}>
                <ImageListItemBar
                    sx={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        position: 'fixed', bottom: 1, left: 0, right: 0
                    }}
                    title={"Website-Portfolio"}
                    subtitle={' by: Uhnivenko Yevhen'}

                />
            </ImageListItem>
        </ImageList>
    )

}

export default Home;


