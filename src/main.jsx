import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Menu from './Menu';
import { CssBaseline } from '@mui/material';
import Menu2 from './Menu2';
import Menu3 from './Menu3';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CssBaseline />
        {/* <Menu /> */}
        {/* <Menu2 /> */}
        <Menu3 />
    </React.StrictMode>
);
