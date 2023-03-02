import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Menu from './Menu';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CssBaseline />
        <Menu />
    </React.StrictMode>
);
