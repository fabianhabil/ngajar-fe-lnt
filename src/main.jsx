import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import RefHook from './RefHook';
import EffectHook from './EffectHook';
import { ThemeContextProvider } from './context/ThemeContext';
import ContextHook from './ContextHook';
import Tulisan from './Tulisan';
import TextBox from './TextBox';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <CssBaseline />
            {/* <RefHook /> */}
            {/* <EffectHook /> */}
            <ContextHook />
            <Tulisan />
            <TextBox />
        </ThemeContextProvider>
    </React.StrictMode>
);
