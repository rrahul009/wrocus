'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import AdminAuth from '@/components/AdminAuth';
import dynamic from 'next/dynamic';

// Dynamically import DocumentViewer to ensure it only renders on the client.
const DocumentViewer = dynamic(() => import('react-documents'), { ssr: false });

export default function DocViewer() {
    const searchParams = useSearchParams(); // Works only on the client.
    const [uri, setUri] = useState('');

    useEffect(() => {
        const fetchResumeData = async () => {
            const userID = searchParams.get('id');
            if (userID) {
                try {
                    const response = await fetch(`http://localhost:5001/api/resume/${userID}`);
                    const resumeDetail = await response.json();
                    const uriResume = resumeDetail?.data.secure_url ?? '';
                    setUri(uriResume);
                } catch (error) {
                    console.error('Error fetching resume:', error);
                }
            }
        };

        fetchResumeData();
    }, [searchParams]);

    return (
        <Suspense fallback={<div>Loading DocViewer...</div>}>
            <div className="App">
                <AdminAuth>
                    {uri ? (
                        <DocumentViewer
                            style={{ height: '100vh', width: '100%' }}
                            queryParams="hl=EN"
                            url={uri}
                            overrideLocalhost=""
                        />
                    ) : (
                        <div>Loading Document...</div>
                    )}
                </AdminAuth>
            </div>
        </Suspense>
    );
}
