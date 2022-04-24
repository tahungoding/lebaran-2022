import React from 'react'

export default function Cctv() {

    React.useEffect(() => {
<<<<<<< HEAD
        document.title =  "CCTV Lalu Lintas - Sistem Informasi Idul Fitri" 
=======
        document.title = "CCTV - Sumedang LRT - Lebaran Realtime"
>>>>>>> 63db113ce036f74a6b5d123b5acf3e9d81fd10bf
     }, []);
    return (
        <iframe src="https://atcs.sumedangkab.go.id/" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
