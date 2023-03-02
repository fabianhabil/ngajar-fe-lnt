import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function Menu() {
    const [angka, setAngka] = useState(0);
    const [hide, setHide] = useState(true);

    const nama2 = ['Raiza', 'Rickie', 'Farhan', 'Nicolas', 'Rafael'];

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '32px'
                }}
            >
                <Typography variant='h2'>{angka}</Typography>
                {hide === true ? null : (
                    <Typography variant='h2'>Santai dulu gak sih😁</Typography>
                )}
                <div style={{ display: 'flex', gap: '16px' }}>
                    <Button
                        variant='contained'
                        onClick={() => {
                            if (angka === 0) return;
                            setAngka((state) => state - 1);
                        }}
                    >
                        -
                    </Button>
                    <Button
                        variant='contained'
                        onClick={() => {
                            setAngka((state) => state + 1);
                        }}
                    >
                        +
                    </Button>
                </div>
                <Button
                    variant='contained'
                    onClick={() => {
                        setHide((state) => !state);
                    }}
                >
                    Hide me!
                </Button>
                {nama2.map((remoteac, index) => {
                    return <Typography key={remoteac}>{remoteac}</Typography>;
                })}
            </div>
        </>
    );
}

export default Menu;
