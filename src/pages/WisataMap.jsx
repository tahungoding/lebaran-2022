import React from 'react'

export default function WisataMap() {

    React.useEffect(() => {
        document.title = "Tempat Wisata - Sistem Informasi Idul Fitri"
     }, []);

    return (
        <iframe src="https://virtualtour.sumedangkab.go.id/" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
