import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

function EffectHook() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    useEffect(() => {
        console.log(
            'effect akan kepanggil karena adanya pergantian state yang menyebakan reaact rerender'
        );
    });

    useEffect(() => {
        console.log(
            'effect ini akan kepanggil satu kali saat component diload'
        );
    }, []);

    useEffect(() => {
        console.log('effect ini akan kepanggil ketika value1 yang berubah');
    }, [value1]);

    // React Exhaustive Deps (Functionnya harus ada di dependency list)
    useEffect(() => {
        doSomethingIfValue2Changed();
    }, [value2, doSomethingIfValue2Changed]);

    function doSomethingIfValue2Changed() {
        console.log('CHANGED VALUE 2');
    }

    return (
        <>
            <Button>test</Button>
            <br />
            <TextField
                placeholder='input1'
                onChange={(e) => {
                    setValue1(() => e.target.value);
                }}
            />
            <br />
            <TextField
                placeholder='input2'
                onChange={(e) => {
                    setValue2(() => e.target.value);
                }}
            />
        </>
    );
}

export default EffectHook;
