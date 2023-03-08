import { Button, Typography } from '@mui/material';
import { useState } from 'react';

function Menu() {
    const [count, setCount] = useState(1);

    function incrementOnClick() {
        setCount((prevState) => prevState + 1);
    }

    const [mahasiswa, setMahasiswa] = useState({
        nama: {
            firstName: 'Fabian',
            secondName: 'Habil'
        },
        NIM: '250-199012312',
        kelas: 'LD01'
    });

    console.log(mahasiswa);

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
                <Typography variant='h3'>{count}</Typography>
                <div style={{ display: 'flex' }}>
                    <Button
                        sx={{ fontSize: '28px' }}
                        variant='contained'
                        onClick={incrementOnClick}
                    >
                        +
                    </Button>
                </div>
                <Typography variant='h4'>{`${mahasiswa.nama.firstName} ${mahasiswa.nama.secondName}`}</Typography>
                <Typography variant='h4'>{mahasiswa.NIM}</Typography>
                <input
                    defaultValue={mahasiswa.nama.firstName}
                    onChange={(e) =>
                        setMahasiswa((prevMahasiswa) => ({
                            ...prevMahasiswa,
                            nama: {
                                ...prevMahasiswa.nama,
                                firstName: e.target.value
                            }
                        }))
                    }
                />
                <input
                    defaultValue={mahasiswa.nama.secondName}
                    onChange={(e) =>
                        setMahasiswa((prevMahasiswa) => ({
                            ...prevMahasiswa,
                            nama: {
                                ...prevMahasiswa.nama,
                                secondName: e.target.value
                            }
                        }))
                    }
                />

                <input
                    defaultValue={mahasiswa.NIM}
                    onChange={(e) =>
                        setMahasiswa((prevMahasiswa) => ({
                            ...prevMahasiswa,
                            NIM: e.target.value
                        }))
                    }
                />
            </div>
        </>
    );
}

export default Menu;
