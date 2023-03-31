import Image from 'next/image';

function Home() {
    return (
        <>
            <h1>ini page mahasiswa keseluruhan</h1>
            <Image
                src='/fotobinus/kmg.jpeg'
                width={200}
                height={200}
                alt='alt'
            />
        </>
    );
}

export default Home;
