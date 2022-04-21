import React from 'react'

export default function MacetRealtime() {
    React.useEffect(() => {
        document.title = "Macet Realtime - Sistem Informasi Idul Fitri"
     }, []);
    return (
        <iframe src="https://opendata.sumedangkab.go.id/index.php/MacetRealtime/dashboard" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
