import { useState } from 'react';
import { sculptureList } from './data';
import { Button, Grid, Typography } from '@mui/material';

function Card({ name, artist, description, url, alt, setIndex }) {
    return (
        <>
            <Grid container direction='column'>
                <Grid item>
                    <img src={url} alt={alt} />
                </Grid>
                <Grid item>
                    <Typography>{artist}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{description}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{name}</Typography>
                </Grid>
                <Grid item container direction='row'>
                    <Grid item>
                        <Button
                            onClick={() =>
                                setIndex((prevIndex) =>
                                    prevIndex === 0 ? 0 : prevIndex - 1
                                )
                            }
                        >
                            -
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() =>
                                setIndex((prevIndex) =>
                                    prevIndex === sculptureList.length - 1
                                        ? prevIndex
                                        : prevIndex + 1
                                )
                            }
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

function Menu3() {
    const [index, setIndex] = useState(1);
    const selectedData = sculptureList[index];

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
                <Card {...selectedData} setIndex={setIndex} />
            </div>
        </>
    );
}

export default Menu3;
