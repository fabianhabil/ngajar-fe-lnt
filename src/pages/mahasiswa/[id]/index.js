import { useRouter } from 'next/router';

function Home() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <h1>ini page mahasiswa untuk nama {id}</h1>
        </>
    );
}

export default Home;
