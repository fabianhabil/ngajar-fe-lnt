import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function Tulisan() {
    const themeContext = useContext(ThemeContext);

    return (
        <>
            <Typography
                style={{
                    color: themeContext.darkMode === true ? 'white' : 'black',
                    backgroundColor:
                        themeContext.darkMode === false ? 'white' : 'black'
                }}
            >
                {themeContext.darkMode === true
                    ? 'tulisan ini warna putih'
                    : 'tulisan ini warna hitam'}
            </Typography>
        </>
    );
}

export default Tulisan;
