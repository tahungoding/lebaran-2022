import React from 'react'

export default function Cctv() {
    React.useEffect(() => {
        document.title = "CCTV - Sumedang LRT - Lebaran Realtime"
     }, []);
    return (
        <iframe src="https://opendata.sumedangkab.go.id/index.php/MacetRealtime/dashboard" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
