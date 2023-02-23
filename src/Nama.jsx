function Nama(props) {
    const { nama, umur } = props;
    // props struct, isi dari struct ini itu parameter yang kita pass saat memanggil component
    return (
        <>
            hi nama ku {nama}, umur ku {umur}
        </>
    );
}

export default Nama;
