import React from 'react'

export default function DashboardAtcs() {
    React.useEffect(() => {
        document.title = "Dashboard Atcs - Sistem Informasi Idul Fitri"
     }, []);
    return (
        <iframe src="https://atcs.sumedangkab.go.id/dashboard/test" style={{height: "100vh", width: "100%"}} frameborder="0"></iframe>
    )
}
