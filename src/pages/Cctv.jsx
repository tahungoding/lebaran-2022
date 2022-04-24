import React from 'react'

export default function Cctv() {

    React.useEffect(() => {
        document.title =  "CCTV Lalu Lintas - Sistem Informasi Idul Fitri" 
     }, []);
    return (
        <iframe src="https://atcs.sumedangkab.go.id/" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
