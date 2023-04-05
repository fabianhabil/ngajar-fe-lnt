import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState([]);

    const getPokemonData = async () => {
        try {
            const response = await axios.get(
                'https://pokeapi.co/api/v2/pokemon'
            );
            setPokemon(() => response.data);
            setLoading(() => false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPokemonData();
    }, []);
    console.log(pokemon);

    return (
        <>
            {!loading ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}
                >
                    {pokemon.results.map((data, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    textDecoration: 'underline blue'
                                }}
                            >
                                <Link href={`/pokemon/${data.name}`}>{data.name}</Link>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </>
    );
}
