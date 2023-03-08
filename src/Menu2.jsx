import { Button } from '@mui/material';
import { useState } from 'react';

function Menu2() {
    const [nama, setNama] = useState([
        'Fabian',
        'Fabian2',
        'Fabian3',
        'Fabian4'
    ]);

    return (
        <>
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <ul>
                    {nama.map((data, index) => {
                        return <li key={index}>{data}</li>;
                    })}
                </ul>
                <Button
                    onClick={() => {
                        const arrayBaru = [...nama];
                        arrayBaru[0] = 'Test';
                        setNama(() => arrayBaru);
                    }}
                >
                    click me
                </Button>
            </div>
        </>
    );
}

export default Menu2;
