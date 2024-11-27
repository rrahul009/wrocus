'use client'
import AdminAuth from "@/components/AdminAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DocumentViewer } from "react-documents";

export default function DocViwer() {

    const searchParams = useSearchParams()
    const [uri, seturi] = useState('')

    useEffect(async () => {
        const userID = searchParams.get('id')
        const resumeDetail = await fetch(`http://localhost:5001/api/resume/${userID}`).then((r) => r.json())
        const uriResume = resumeDetail?.data.secure_url ?? '';
        seturi(uriResume)
    }, [])

    return (
        <div className="App">
            <AdminAuth>
                <DocumentViewer style={{ height: '100vh', width: '100%' }} queryParams="hl=EN" url={uri} overrideLocalhost='' />
            </AdminAuth>
        </div>
    );
}
