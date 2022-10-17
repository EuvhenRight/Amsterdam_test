import {PaletteMode} from "@mui/material";
import {deepOrange, grey, yellow} from "@mui/material/colors";
import {createContext, useMemo} from "react";
import {useState} from "react";
import { createTheme } from '@mui/material/styles';


export const getDesignTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: yellow[600]
                },
                secondary: {
                    main: grey[900],
                    light: grey[600]
                },
                background: {
                    default: grey[100],
                    paper: grey[200],
                },
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                primary: {
                    main: deepOrange[700],
                },
                secondary: {
                    main: grey[100],
                    light: grey[200],
                },
                background: {
                    default: grey[900],
                    paper: grey[800],
                },
                text: {
                    primary: grey[100],
                    secondary: grey[100],
                },
            }),
    },
});

export const ColorModeContext = createContext({
    toggleColoMode: () => {
    }
});

export const useMode = () => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );
    const theme = useMemo(()=>createTheme(getDesignTheme(mode)),[mode])

    return[theme,colorMode]
}