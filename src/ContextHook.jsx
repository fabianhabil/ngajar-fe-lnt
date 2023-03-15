import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Button } from '@mui/material';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

function ContextHook() {
    const themeContext = useContext(ThemeContext);

    return (
        <>
            <div
                style={{
                    minHeight: '50vh',
                    backgroundColor:
                        themeContext.darkMode === true ? 'black' : 'white'
                }}
            >
                <Button variant='contained' onClick={themeContext.setTheme}>
                    {themeContext.darkMode === true ? (
                        <MdDarkMode />
                    ) : (
                        <MdLightMode />
                    )}
                </Button>
            </div>
        </>
    );
}

export default ContextHook;
