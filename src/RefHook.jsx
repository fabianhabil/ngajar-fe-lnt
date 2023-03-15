import { Button } from '@mui/material';
import { useRef, useState } from 'react';

function RefHook() {
    const [nama, setNama] = useState('');
    const inputRef = useRef(null);

    return (
        <>
            {nama}
            <br />
            <input
                placeholder='Nama Mahasiswa'
                onChange={(event) => {
                    // setNama(() => event.target.value);
                }}
                ref={inputRef}
            />
            <Button
                onClick={() => {
                    console.log(inputRef.current.value);
                }}
            >
                print value
            </Button>
            <br />
            <Button
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                Focus the input
            </Button>
        </>
    );
}

export default RefHook;
