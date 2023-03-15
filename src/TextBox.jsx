import { TextField } from '@mui/material';
import React from 'react';
import useTextBox from './hooks/InputHook';

function TextBox() {
    const nama = useTextBox();
    const age = useTextBox();
    const school = useTextBox();
    const nim = useTextBox();
    const hobby = useTextBox();
    const color = useTextBox();

    return (
        <>
            <TextField
                placeholder='name'
                onChange={(e) => nama.handleChange(e)}
            />
            <br />
            <TextField
                placeholder='age'
                onChange={(e) => age.handleChange(e)}
            />
            <br />
            <TextField
                placeholder='school'
                onChange={(e) => school.handleChange(e)}
            />
            <br />
            <TextField
                placeholder='NIM'
                onChange={(e) => nim.handleChange(e)}
            />
            <br />
            <TextField
                placeholder='hobby'
                onChange={(e) => hobby.handleChange(e)}
            />
            <br />
            <TextField
                placeholder='favorite color'
                onChange={(e) => color.handleChange(e)}
            />
        </>
    );
}

export default TextBox;
