import { useState } from 'react';

function Button() {
    const [warna, setWarna] = useState('red');

    return (
        <>
            <p style={{ color: warna }}>
                warna text harusnya berubah kalo button dibawah diclick
            </p>
            <br></br>
            <button
                onClick={() =>
                    setWarna((state) => (state === 'red' ? 'green' : 'red'))
                }
            >
                click me ganti warna
            </button>
        </>
    );
}

export default Button;
