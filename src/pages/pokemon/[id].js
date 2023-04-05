import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function PokemonPage() {
    const router = useRouter();
    const { id } = router.query;
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemonData = async () => {
        try {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            setPokemonData(() => response.data);
            setLoading(() => false);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (id) {
            getPokemonData();
        }
    }, [id]);

    return (
        <>
            {loading ? null : (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        padding: '32px'
                    }}
                >
                    <h1 style={{ textAlign: 'center' }}>{pokemonData.name}</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >
                        <h1>Abilities</h1>
                        {pokemonData.abilities.map((data, index) => {
                            return (
                                <p key={index}>
                                    {data.ability.name} (
                                    {data.is_hidden === true
                                        ? 'hidden ability'
                                        : 'normal ability'}
                                    )
                                </p>
                            );
                        })}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}
                    >
                        <h1>Moves</h1>
                        {pokemonData.moves.map((data, index) => {
                            return <p key={index}>{data.move.name}</p>;
                        })}
                    </div>
                </div>
            )}
        </>
    );
}

export default PokemonPage;
