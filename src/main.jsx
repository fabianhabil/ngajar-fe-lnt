import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import App2 from './App2';
import Nama from './Nama';
import Button from './Button';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <App2 />
        <br></br>
        <Nama nama={'Fabian'} umur={20} />
        <br></br>
        <Nama nama={'Novan'} umur={15} />
        <br></br>
        <Nama nama={'Ghassan'} umur={10} />
        <br></br>
        <Nama nama={'Mahesa'} umur={11} />
        <br></br>
        <Nama nama={'Devano'} umur={12} />
        <br></br>
        <Nama nama={'Kenrick'} umur={17} />
        <br></br>
        <Nama nama={'Dimas'} umur={12} />
        <br></br>
        <Nama nama={'Dierta'} umur={18} />
        <br></br>
        <Button />
    </React.StrictMode>
);
