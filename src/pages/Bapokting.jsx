import React from 'react'

export default function Bapokting() {
    React.useEffect(() => {
        document.title = "Bapokting - Sumedang LRT - Lebaran Realtime"
     }, []);
    return (
        <iframe src="https://opendata.sumedangkab.go.id/index.php/Bapokting/dashboard" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
