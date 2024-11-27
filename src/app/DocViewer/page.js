'use client';

import AdminAuth from "@/components/AdminAuth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DocumentViewer } from "react-documents";
import { Suspense } from "react";

export default function DocViewer() {
    const searchParams = useSearchParams();
    const [uri, setUri] = useState('');

    useEffect(() => {
        const fetchResumeData = async () => {
            const userID = searchParams.get('id');
            if (userID) {
                try {
                    const resumeDetail = await fetch(`http://localhost:5001/api/resume/${userID}`).then((r) => r.json());
                    const uriResume = resumeDetail?.data.secure_url ?? '';
                    setUri(uriResume);
                } catch (error) {
                    console.error("Error fetching resume:", error);
                }
            }
        };

        fetchResumeData();
    }, [searchParams]); // Dependencies array, only re-run when searchParams change

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="App">
                <AdminAuth>
                    <DocumentViewer
                        style={{ height: '100vh', width: '100%' }}
                        queryParams="hl=EN"
                        url={uri}
                        overrideLocalhost=''
                    />
                </AdminAuth>
            </div>
        </Suspense>
    );
}
