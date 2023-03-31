import { useState } from 'react';

function Home() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    gap: '8px'
                }}
            >
                <h1>{count}</h1>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <button
                        style={{ width: '40px' }}
                        onClick={() => setCount((state) => state - 1)}
                    >
                        -
                    </button>
                    <button
                        style={{ width: '40px' }}
                        onClick={() => setCount((state) => state + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
